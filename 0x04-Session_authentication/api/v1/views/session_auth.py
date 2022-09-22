#!/usr/bin/env python3
"""
Module that handles all session authentication
"""
from api.v1.views import app_views
from flask import Flask, request, jsonify
from os import getenv
from models.user import User


@app_views.route('/auth_session/login', methods=['POST'], strict_slashes=False)
def session_id():
    """login handles the post request for the route /auth_session/login"""
    from api.v1.app import auth
    email = request.form.get('email')
    password = request.form.get('password')
    if email is None or email == "":
        return jsonify({"error": "email missing"}), 400
    if password is None:
        return jsonify({"error": "password missing"}), 400
    usrs = User.search({'email': email})

    if not usrs:
        return jsonify({"error": "no user found for this email"}), 404
    
    for user in usrs:
        if not user.is_valid_password(password):
            return jsonify({"error": "wrong password"}), 401
        else:
            session_id = auth.create_session(user.id)
            SESSION_NAME = getenv('SESSION_NAME')
            out = jsonify(user.to_json())
            out.set_cookie(SESSION_NAME, session_id)
            return out
