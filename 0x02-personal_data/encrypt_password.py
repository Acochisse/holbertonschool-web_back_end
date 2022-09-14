#!/usr/bin/env python3
"""
Module that handles the hashing of passwords
"""
import bcrypt


def hash_password(password: str) -> bytes:
    """returns a salted, hashed password, which is a byte string"""
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt())


def is_valid(hashed_password: bytes, password: str) -> bool:
    """checks if the provided password matches the hashed password"""
    return bcrypt.checkpw(password.encode(), hashed_password)
