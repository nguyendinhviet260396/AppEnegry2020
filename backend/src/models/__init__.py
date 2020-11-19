#src/models/__init__.py

from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt


# initialize our db
db = SQLAlchemy()
bcrypt = Bcrypt()

from .UserModel import UserModel
from .UserLogModel import UserLogModel
from .SPM91Model import SPM91Model
from .SPM93Model import SPM93Model
from .MainData import MainData