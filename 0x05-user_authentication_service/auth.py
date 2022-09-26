#!/usr/bin/env python3
""" Module that handles all authentication
"""
from db import DB
import bcrypt
import uuid
from user import User


def _hash_password(password: str) -> str:
    """Hash a password for storing.
    """
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    
def _generate_uuid() -> str:
    """Generate uuid
    """
    return str(uuid.uuid4())

class Auth:
    """Auth class to interact with the authentication database.
    """

    def __init__(self):
        """initisation"""
        self._db = DB()
        
    
    def register_user(self, email: str, password: str) -> User:
        """Register user
        """
        try:
            self._db.find_user_by(email=email)
            raise ValueError('User {} already exists'.format(email))
        except NoResultFound:
            return self._db.add_user(email, self._hash_password(password))
        
    def valid_login(self, email: str, password: str) -> bool:
        """Valid login
        """
        try:
            user = self._db.find_user_by(email=email)
            return bcrypt.checkpw(password.encode('utf-8'), user.hashed_password)
        except NoResultFound:
            return False
    
    def create_session(self, email: str) -> str:
        """Create session
        """
        try:
            user = self._db.find_user_by(email=email)
            session_id = self._generate_uuid()
            self._db.update_user(user.id, session_id=session_id)
            return session_id
        except NoResultFound:
            return None