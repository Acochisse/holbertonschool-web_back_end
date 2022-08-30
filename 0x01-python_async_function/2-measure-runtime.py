#!/usr/bin/env python3
"""uses previously created functions to measure time"""
import asyncio


async def measure_time(n, max_delay):
    """uses previously created functions to measure time"""
    return asyncio.run(wait_n(n, max_delay))
