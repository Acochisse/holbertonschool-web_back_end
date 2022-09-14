#!/usr/bin/env python3
"""
This module contains functions relating to obsufcation of personal data
"""
import logging
import re
from typing import List
import logging
import os
import mysql.connector


PII_FIELDS = ("name", "email", "phone", "ssn", "password")


def get_db() -> mysql.connector.connection.MySQLConnection:
    """returns a connector to the database"""
    return mysql.connector.connect(
        user=os.environ.get("PERSONAL_DATA_DB_USERNAME", "root"),
        password=os.environ.get("PERSONAL_DATA_DB_PASSWORD", ""),
        host=os.environ.get("PERSONAL_DATA_DB_HOST", "localhost"),
        database=os.environ.get("PERSONAL_DATA_DB_NAME")
    )


def get_logger() -> logging.Logger:
    """logger function that returns a logging.Logger object"""
    logger = logging.getLogger("user_data")
    logger.setLevel(logging.INFO)
    logger.propagate = False
    stream_handler = logging.StreamHandler()
    stream_handler.setFormatter(RedactingFormatter(PII_FIELDS))
    logger.addHandler(stream_handler)
    return logger


def filter_datum(fields: List[str], redaction: str, message: str,
                 separator: str) -> str:
    """takes a string message and replaces all the redaction fields with ***"""
    for field in fields:
        pattern = "(?<={}=).+?(?={})".format(field, separator)
        message = re.sub(pattern, redaction, message)
    return message


class RedactingFormatter(logging.Formatter):
    """ Redacting Formatter class
        """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"

    def __init__(self, fields: List[str]):
        """initialization"""
        self.fields = fields
        super(RedactingFormatter, self).__init__(self.FORMAT)

    def format(self, record: logging.LogRecord) -> str:
        """formats the log record"""
        Formatter = logging.Formatter(self.FORMAT)
        record = Formatter.format(record)
        return filter_datum(self.fields, self.REDACTION,
                            str(record), self.SEPARATOR)
