#!/usr/bin/env python3
"""task_wait_n returns a list of delays"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """returns the list of delays"""
    list_m = [task_wait_random(max_delay) for i in range(n)]
    return [await i for i in asyncio.as_completed(list_m)]
