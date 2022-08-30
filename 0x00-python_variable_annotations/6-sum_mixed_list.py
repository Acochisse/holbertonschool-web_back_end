#!/usr/bin/env python3
"""takes a mixed list of floats and ints and returns sum as float"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """takes a mixed list of floats and ints and returns sum as float"""
    return sum(mxd_lst)