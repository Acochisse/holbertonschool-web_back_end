#!/usr/bin/env python3
"""Module that handles authorization and authentication for the API"""
from api.v1.auth.auth import Auth
import base64
from typing import Tuple, TypeVar
from models.user import User


class BasicAuth(Auth):
    """Class that handles authorization and authentication for the API"""

    def extract_base64_authorization_header(self,
                                            authorization_header: str) -> str:
        """returns the Base64 part of the Authorization header for 
        a Basic Authentication"""
        if authorization_header is None or type(authorization_header) is not str:
            return None
        if not authorization_header.startswith("Basic "):
            return None
        return authorization_header[6:]

    def decode_base64_authorization_header(self, 
                                           base64_authorization_header: str) -> str:
        """returns the decoded value of a Base64 string base64_authorization_header"""
        if base64_authorization_header is None or type(base64_authorization_header) is not str:
            return None
        try:
            output = base64.b64decode(base64_authorization_header).decode('utf-8')
            return output
        except Exception:
            return None

    def extract_user_credentials(self,
                                 decoded_base64_authorization_header: str) -> tuple:
        """returns usr email and pwd from base64 decoded value"""
        if decoded_base64_authorization_header is None or type(decoded_base64_authorization_header) is not str:
            return (None, None)
        if ':' not in decoded_base64_authorization_header:
            return (None, None)
        else: 
            return tuple(decoded_base64_authorization_header.split(':', 1))

    def user_object_from_credentials(self, user_email: str,
                                     user_pwd: str) -> TypeVar('User'):
        """returns the User instance based on email and pwd"""
        if user_email is None or type(user_email) is not str:
            return None
        if user_pwd is None or type(user_pwd) is not str:
            return None

        if not User.search({'email': user_email}):
            return None

        try:
            usr = User.search({'email': user_email})
        except Exception:
            return None

        for user in usr:
            if user.is_valid_password(user_pwd):
                return user


    def current_user(self, request=None) -> TypeVar('User'):
        """overloads Auth and retrieves the User instance for a request"""
        auth_header = self.authorization_header(request)
        base64_header = self.extract_base64_authorization_header(auth_header)
        decoded_header = self.decode_base64_authorization_header(base64_header)
        email, pwd = self.extract_user_credentials(decoded_header)
        return self.user_object_from_credentials(email, pwd)
