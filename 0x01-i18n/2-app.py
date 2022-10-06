#!/usr/bin/env python3
"""
module that creates a simple flask app
"""
import flask
from urllib import request
from flask import render_template
from flask_babel import Babel

babel = Babel(app)
app = flask.Flask(__name__)


class Config(object):
    """Config class for Babel"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


@app.route('/', strict_slashes=False)
def create_app():
    return render_template('1-index.html')


@babel.localeselector
def get_locale():
    """Get locale from request"""
    return request.accept_languages.best_match(app.config['LANGUAGES'])


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
