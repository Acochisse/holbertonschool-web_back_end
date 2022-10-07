#!/usr/bin/env python3
"""
module that creates a simple flask app
"""
import flask
from flask import render_template, request
from flask_babel import Babel, gettext


app = flask.Flask(__name__)
babel = Babel(app)


class Config(object):
    """Config class for Babel"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


@app.route('/', methods=['GET'], strict_slashes=False)
def create_app() -> str:
    """Creates a simple flask app"""
    return render_template('4-index.html')


@babel.localeselector
def get_locale() -> str:
    """ Get locale from request """
    locale = request.args.get('locale')
    if locale and locale in Config.LANGUAGES:
        return locale
    return request.accept_languages.best_match(Config.LANGUAGES)


if __name__ == '__main__':
    app.run()
