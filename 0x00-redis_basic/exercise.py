#!/usr/bin/env python3
"""
Module containing the class Cache, which manages a cache database with redis
"""
import redis
import uuid
from typing import Union, Callable, Optional,
from functools import wraps


def call_history(method: callable) -> callable:
    """Stores the history of inputs and outputs for a particular function"""

    @wraps(method)
    def wrapper(self, *args, **kwargs):
        """Wrapper function"""
        self._redis.rpush(method.__qualname__ + ":inputs", str(args))
        result = method(self, *args, **kwargs)
        self._redis.rpush(method.__qualname__ + ":outputs", str(result))
        return result
    return wrapper


def count_calls(method: callable) -> callable:
    """Counts the number of calls to a function"""
    key = method.__qualname__

    @wraps(method)
    def wrapper(self, *args, **kwargs):
        """Wrapper function"""
        self._redis.incr(key)
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
    def store(self, data: Union[str, bytes, int, float]) -> str:
        """Stores data in redis"""
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key

    def get(self, key: str, fn: Optional[callable] = None) -> Union[str, bytes, int, float]:
        """Gets data from redis"""
        data = self._redis.get(key)
        if fn:
            return fn(data)
        return data

    def get_str(self, key: str) -> str:
        """Gets data from redis and returns a string"""
        return self._redis.get("data").decode("utf-8")

    def get_int(self, key: str) -> int:
        """Gets data from redis and returns an int"""
        data = self._redis.get(key)
        try:
            data = int(data)
        except ValueError:
            return 0

    def replay(method: callable) -> None:
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
