#!/usr/bin/env python3
"""
function index_range takes in two arguements: page and page_size
"""


def index_range(page, page_size):
    """return a tuple of size two containing a start index and an end index"""
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
