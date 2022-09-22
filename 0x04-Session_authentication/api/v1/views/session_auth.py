#!/usr/bin/env python3
"""
Module that handles all session authentication
"""

from calendar import calendar


@app.route('/auth_session/login', methods=['POST'], strict_slashes=False)
def login():
    request.form.get('email')
    request.form.get('password')
    if email is None:
        return jsonify({"error": "email missing"}), 400
    if password is None:
        return jsonify({"error": "password missing"}), 400
    if not User.search({'email': email}):
        return jsonify({"error": "no user found for this email"}), 
    usr = User.search({'email': user_email})
    if not usr.is_valid_password(password):
        return jsonify({"error": "wrong password"}), 401
    from api.v1.app import auth
    out = auth.create_session(usr.id)
    out = jsonify(usr.to_json())
    out.set_cookie(getenv('SESSION_NAME'), out)
    return out
