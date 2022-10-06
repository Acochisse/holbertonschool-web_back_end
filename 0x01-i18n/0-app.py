#!/usr/bin/env python3
"""
module that creates a simple flask app
"""
import flask
from flask import render_template

app = flask.Flask(__name__)


@app.route('/', strict_slashes=False)
def create_app():
    """creates a simple flask app"""
    return render_template('0-index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
