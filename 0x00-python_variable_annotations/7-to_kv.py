#!/usr/bin/env python3
"""takes a float or int and returns a tuple of two ints"""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """takes a float or int and returns a tuple of two ints"""
    return (k, v * v)
