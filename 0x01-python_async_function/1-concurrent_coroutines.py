#!/usr/bin/env python3
"""runs multiple coroutines at the same time with async"""
import asyncio


async def wait_n(n, max_delay):
    """runs multiple coroutines at the same time with async"""
    delay = []
    for i in range(n):
        delay.append(asyncio.sleep(max_delay))
    return [await i for i in asyncio.as_completed(delay)]
