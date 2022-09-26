#!/usr/bin/env python3
"""
Module that implements a flask app
"""
from flask import Flask, jsonify, request, abort
from auth import Auth


@app.route('/', methods=['GET'], strict_slashes=False)
def index() -> str:
    """ GET /
    """
    return jsonify({"message": "Bienvenue"})

@app.route('/users', methods=['POST'], strict_slashes=False)
def users() -> str:
    """users post method
    """
    email = request.form.get('email')
    password = request.form.get('password')
    try:
        user = auth.register_user(email, password)
        return jsonify({"email": email, "message": "user created"})
    except ValueError:
        return jsonify({"message": "email already registered"}), 400
    
    @app.route('/sessions', methods=['POST'], strict_slashes=False)
    def login() -> str:
        """login method
        """
        email = request.form.get('email')
        password = request.form.get('password')
        if auth.valid_login(email, password):
            session_id = auth.create_session(email)
            response = jsonify({"email": email, "message": "logged in"})
            response.set_cookie('session_id', session_id)
            return response
        else:
            abort(401)