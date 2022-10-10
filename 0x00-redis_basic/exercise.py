#!/usr/bin/env python3
"""
Module containing the class Cache, which manages a cache database with redis
"""
import redis
import uuid
from typing import Union, Callable, Optional


def call_history(method: callable) -> callable:
    """Stores the history of inputs and outputs for a particular function"""

    def wrapper(self, *args, **kwargs):
        """Wrapper function"""
        self._redis.rpush(method.__qualname__ + ":inputs", str(args))
        result = method(self, *args, **kwargs)
        self._redis.rpush(method.__qualname__ + ":outputs", str(result))
        return result
    return wrapper


def count_calls(method: callable) -> callable:
    """Counts the number of calls to a function"""

    def wrapper(self, *args, **kwargs):
        """Wrapper function"""
        self._redis.incr(method.__qualname__)
        return method(self, *args, **kwargs)
    return wrapper


class Cache:
    """Class that manages redis functions"""

    def __init__(self):
        """initialises class"""
        self._redis = redis.Redis()
        self._redis.flushdb()

    @count_calls
    @call_history
    def store(self, data: str) -> str:
        """Stores data in redis"""
        self._redis.set("data", data)
        key = str(uuid.uuid4())
        return key

    def get(self, key: str, fn: callable = None) -> str:
        """Gets data from redis"""
        if fn:
            self._redis.set("fn", fn)
        return self._redis.get("data")

    def get_str(self, key: str) -> str:
        """Gets data from redis and returns a string"""
        return self._redis.get("data").decode("utf-8")

    def get_int(self, key: str) -> int:
        """Gets data from redis and returns an int"""
        return int(self._redis.get("data"))

    def replay(self):
        """Replays the history of calls to the class"""
        for key in self._redis.keys():
            key = key.decode("utf-8")
            if key.endswith(":inputs"):
                print(f"{key[:-7]}(*{self._redis.lrange(key, 0, -1)}) -> "
                      f"{self._redis.lrange(key[:-7] + ':outputs', 0, -1)}")
            elif key.endswith(":outputs"):
                pass
            else:
                print(
                    f"{key} was called {self._redis.get(key).decode('utf-8')} times")
