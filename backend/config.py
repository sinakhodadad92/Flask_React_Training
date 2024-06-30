from decouple import config
import os

BASE_DIR = os.path.dirname(os.path.realpath(__file__))

class Config:
    SECRET_KEY = config('SECRET_KEY')

    # SQLALCHEMY_TRACK_MODIFICATIONS:
    # Controls whether Flask-SQLAlchemy tracks modifications to objects.
    # - True: Enables tracking (useful for debugging/auditing).
    # - False: Disables tracking (better performance).
    # Default is False to reduce overhead.
    SQLALCHEMY_TRACK_MODIFICATIONS = config('SQLALCHEMY_TRACK_MODIFICATIONS')

class DevConfig(Config):
    SQLALCHEMY_DATABASE_URI = "sqlite:///" + os.path.join(BASE_DIR, "dev.db")
    # DEBUG:
    # Enables or disables debug mode. When set to True, the server provides detailed error
    # pages and automatically reloads on code changes.
    DEBUG = True

    # SQLALCHEMY_ECHO:
    # If set to True, SQLAlchemy will log all the statements issued to stderr which can
    # be useful for debugging.
    SQLALCHEMY_ECHO = True

class ProdConfig(Config):
    pass

class TestConfig(Config):
    SQLALCHEMY_DATABASE_URI = "sqlite:///" + os.path.join(BASE_DIR, "test.db")

    # TESTING:
    # Enable testing mode. Exceptions are propagated rather than handled by the the
    # the app’s error handlers. Should be set to True in testing environments.
    TESTING = True

    # SQLALCHEMY_ECHO:
    # If set to True, SQLAlchemy will log all the statements issued to stderr which can
    # be useful for debugging.
    SQLALCHEMY_ECHO = False


