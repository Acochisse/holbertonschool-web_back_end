#!/usr/bin/env python3
"""
Module that implements hypermedia pagination
"""
import csv
import math
from typing import List


def index_range(page, page_size):
    """return a tuple of size two containing a start index and an end index"""
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)

class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """return the appropriate page of the dataset (i.e. the correct list of
        rows).
        """
        assert type(page) == int and type(page_size) == int
        assert page > 0 and page_size > 0
        start, end = index_range(page, page_size)
        if start >= len(self.dataset()):
            return []
        return self.dataset()[start:end]
    
    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        """return a dictionary containing the following key-value pairs:
        page_size: the length of the returned dataset page
        page: the current page number
        data: the dataset page (equivalent to return from previous task)
        next_page: number of the next page, None if no next page
        prev_page: number of the previous page, None if no previous page
        total_pages: the total number of pages in the dataset as an integer
        """
        assert type(page) == int and type(page_size) == int
        assert page > 0 and page_size > 0
        start, end = index_range(page, page_size)
        if start >= len(self.dataset()):
            return {}
        data = self.dataset()[start:end]
        next_page = page + 1 if end < len(self.dataset()) else None
        prev_page = page - 1 if page > 1 else None
        total_pages = math.ceil(len(self.dataset()) / page_size)
        return {"page_size": page_size, "page": page, "data": data,
                "next_page": next_page, "prev_page": prev_page,
                "total_pages": total_pages}
