#!/usr/bin/env python3
"""Module that inherits from BaseCaching, and implements the LIFO algorithm"""
from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """Class that implements the LIFO algorithm for BaseCaching
    Has three methods: __init__, put, get.
    """
    
    def __init__(self):
        """initialise"""
        super().__init__()
        self.keys = []
    
    def put(self, key, item):
        """
        Must assign to the dictionary self.cache_data the item value for the key key.
    If key or item is None, this method should not do anything.
    If the number of items in self.cache_data is higher that BaseCaching.MAX_ITEMS:
    you must discard the last item put in cache (LIFO algorithm)
    you must print DISCARD: with the key discarded and following by a new line
        """
        if key is None or item is None:
            return
        
        if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
            discard = self.keys.pop()
            print("DISCARD: {}".format(discard))
            del self.cache_data[discard]
        self.keys.append(key)
        self.cache_data[key] = item
        
    
    def get(self, key):
        """
        Must return the value in self.cache_data linked to key.
If key is None or if the key doesn’t exist in self.cache_data, return None.
        """
        if key is None or key not in self.cache_data:
            return None
        return self.cache_data[key]