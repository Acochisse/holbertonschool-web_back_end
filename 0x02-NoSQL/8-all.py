#!/usr/bin/env python3
"""
Module uses MongoDB to access and list a collection
"""
from pymongo import MongoClient


def list_all(mongo_collection):
    """
    Lists all documents in a collection
    """
    if mongo_collection is None:
        return []
    return mongo_collection.find()
