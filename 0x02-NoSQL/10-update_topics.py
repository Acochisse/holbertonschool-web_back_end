#!/usr/bin/env python3
"""
Module that contains a function that updates a document in a collection
"""
from pymongo import MongoClient


def update_topics(mongo_collection, name, topics):
    """
    Function that updates a document in a collection
    """
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
