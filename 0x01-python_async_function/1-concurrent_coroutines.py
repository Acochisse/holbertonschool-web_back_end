#!/usr/bin/env python3
"""runs multiple coroutines at the same time with async"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """creates the list of delays"""
    list_m = [await wait_random(max_delay) for i in range(n)]
    return sorted(list_m)
