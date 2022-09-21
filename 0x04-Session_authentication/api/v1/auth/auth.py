#!/usr/bin/env python3
"""
Module that handles authorization and authentication for the API
"""
from flask import request


class Auth():
    """
    Class that handles authorization and authentication for the API
    """

    def require_auth(self, path: str, excluded_paths: list) -> bool:
        """
        Returns True if the path is not in the list of strings excluded_paths
        """
        if path is None or excluded_paths is None or len(excluded_paths) == 0:
            return True
        if path[-1] != '/':
            path += '/'
        for excluded_path in excluded_paths:
            if excluded_path[-1] != '/':
                excluded_path += '/'
            if excluded_path[-2] == '*':
                if path.startswith(excluded_path[:-2]):
                    return False
            if path == excluded_path:
                return False
        return True

    def authorization_header(self, request=None) -> str:
        """
        Returns None if no header is present
        """
        if request is None or 'Authorization' not in request.headers:
            return None
        return request.headers['Authorization']

    def current_user(self, request=None) -> type(None):
        """
        Returns None
        """
        return None

    def session_cookie(self, request=None):
        """
        Returns a cookie value from a request
        """
        if request is None:
            return None
        session_name = getenv('SESSION_NAME')
        return request.cookies.get(session_name)
