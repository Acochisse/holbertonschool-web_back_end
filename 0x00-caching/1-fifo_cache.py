#!/usr/bin/env python3
"""
Module that inherits from BaseCaching, and implements the FIFO algorithm
"""
from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """Class that implements the FIFO algorithm for BaseCaching
    Has three methods: __init__, put, get.
    """
    
    def __init__(self):
        """initialise"""
        super().__init__()
    
    def put(self, key, item):
        """
        Must assign to the dictionary self.cache_data the item value for the key key.
If key or item is None, this method should not do anything.
If the number of items in self.cache_data is higher that BaseCaching.MAX_ITEMS:
you must discard the first item put in cache (FIFO algorithm)
you must print DISCARD: with the key discarded and following by a new line
        """
        if key is not None and item is not None:
            self.cache_data[key] = item
            if len(self.cache_data) > BaseCaching.MAX_ITEMS:
                print("DISCARD: {}".format(list(self.cache_data.keys())[0]))
                del self.cache_data[list(self.cache_data.keys())[0]]
                
    def get(self, key):
        """
        Must return the value in self.cache_data linked to key.
If key is None or if the key doesn’t exist in self.cache_data, return None.
        """
        if key is None or key not in self.cache_data:
            return None
        return self.cache_data[key]
