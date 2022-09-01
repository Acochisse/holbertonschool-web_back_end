#!/usr/bin/env python3
"""
Import async_generator from the previous task and then write a coroutine called async_comprehension that takes no arguments.
The coroutine will collect 10 random numbers using an async comprehensing over async_generator, then return the 10 random numbers.
"""
import random
import asyncio


async def async_comprehension():
    """The coroutine will collect 10 random numbers using an async comprehensing over async_generator, then return the 10 random numbers."""
    return [i async for i in async_generator()]
