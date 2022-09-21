#!usr/bin/env python3
"""Manages API routes for the SessionAuth class"""
from flask import Blueprint, jsonify, request


appviews = Blueprint('appviews', __name__, url_prefix='/api/v1')

from api.v1.views.index import *
from api.v1.views.users import *

User.load_from_file()