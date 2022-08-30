#!/usr/bin/env python3
"""uses previously created functions to measure time"""
import asyncio
import time
import random
wait_n = __import__('1-concurrent_coroutines').wait_n


async def measure_time(n: int, max_delay: int) -> float:
    """uses previously created functions to measure time"""
    start = time.perf_counter()
    await wait_n(n, max_delay)
    end = time.perf_counter()
    return (end - start) / n