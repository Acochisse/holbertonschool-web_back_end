#!/usr/bin/env python3
"""type-annotated function element_length"""
from typing import List, Tuple, Iterable, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """type-annotated function element_length"""
    return [(i, len(i)) for i in lst]