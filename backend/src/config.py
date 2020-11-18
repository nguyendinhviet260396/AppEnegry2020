# /src/config.py

import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

class Development(object):
    """
    Development environment configuration
    """
    DEBUG = True
    TESTING = False
    SQLALCHEMY_TRACK_MODIFICATIONS=False
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY')
    SQLALCHEMY_DATABASE_URI ='postgresql://postgres:0000@127.0.0.1:5432/powermanagesystem'

class Production(object):
    """
    Production environment configurations
    """
    DEBUG = False
    TESTING = False
    SQLALCHEMY_TRACK_MODIFICATIONS=False
    SQLALCHEMY_DATABASE_URI ='postgresql://postgres:0000@127.0.0.1:5432/powermanagesystem'
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY')

class Testing(object):
    """
    Development environment configuration
    """
    TESTING = True
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY')
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:0000@127.0.0.1:5432/powermanagesystem'
    SQLALCHEMY_TRACK_MODIFICATIONS=False

app_config = {
    'development': Development,
    'production': Production,
    'testing': Testing
}
