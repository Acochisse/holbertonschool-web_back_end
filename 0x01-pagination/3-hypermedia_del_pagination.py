#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """return a dictionary containing the following key-value pairs:
        page_size: the length of the returned dataset page
        page: the current page number
        data: the dataset page (equivalent to return from previous task)
        next_index: index of the next page, None if no next page
        prev_index: index of the previous page, None if no previous page
        total_pages: the total number of pages in the dataset as an integer
        """
        assert type(index) == int and type(page_size) == int
        assert index > 0 and page_size > 0
        start = index
        end = index + page_size
        if start >= len(self.indexed_dataset()):
            return {}
        data = [self.indexed_dataset()[i] for i in range(start, end)]
        next_index = end if end < len(self.indexed_dataset()) else None
        prev_index = start - page_size if start > 0 else None
        total_pages = math.ceil(len(self.indexed_dataset()) / page_size)
        return {
            "page_size": page_size,
            "page": index // page_size + 1,
            "data": data,
            "next_index": next_index,
            "prev_index": prev_index,
            "total_pages": total_pages
        }