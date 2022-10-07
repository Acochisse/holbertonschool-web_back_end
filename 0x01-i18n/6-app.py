#!/usr/bin/env python3
"""
module that creates a simple flask app
"""
import flask
from flask import render_template, request, g
from flask_babel import Babel, gettext


app = flask.Flask(__name__)
babel = Babel(app)

users = {
    1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
    2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
    3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
    4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
}


class Config(object):
    """Config class for Babel"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app.config.from_object(Config)


@app.route('/', methods=['GET'], strict_slashes=False)
def create_app() -> str:
    """Creates a simple flask app"""
    return render_template('5-index.html')


@app.route('/login', methods=['GET'], strict_slashes=False)
def login() -> str:
    """logs the user in"""
    return render_template('5-login.html')


def get_user():
    """Get user from users"""
    try:
        username = request.args.get('login_as')
        return users[int(username)]
    except Exception:
        return None


@app.before_request
def before_request():
    """before request gets and sets the user"""
    g.user = get_user()


@babel.localeselector
def get_locale() -> str:
    """ Get locale from request """
    locale = request.args.get('locale')
    langs = app.config['LANGUAGES']
    if locale and locale in langs:
        return locale
    userId = request.args.get('login_as')
    if userId:
        locale = users[int(userId)]['locale']
        if locale in langs:
            return locale
    locale = request.headers.get('locale')
    if locale and locale in langs:
        return locale
    return request.accept_languages.best_match(langs)



if __name__ == '__main__':
    app.run()
