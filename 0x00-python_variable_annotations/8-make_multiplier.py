#!/usr/bin/env python3
"""makes int to multiplier function"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """makes int to multiplier function"""
    return lambda x: x * multiplier
