#!/usr/bin/env python3
"""
uses async comprehension to loop for a range of 10
"""
import random
import asyncio
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """uses async comprehension to loop for a range of 10"""
    return [i async for i in async_generator()]
