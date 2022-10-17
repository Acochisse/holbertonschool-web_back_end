#!/usr/bin/env python3
"""
Module that returns all topics of a school document based on the name
"""
from pymongo import MongoClient


def schools_by_topic(mongo_collection, topic):
    """
    Function that returns all topics of a school document based on the name
    """
    return mongo_collection.find({"topics": topic})