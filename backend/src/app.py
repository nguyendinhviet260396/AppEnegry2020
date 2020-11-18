#src/app.py

from flask import Flask
from flask_cors import CORS
from .config import app_config
from .models import db, bcrypt

# import user_api blueprint
from .views.MainView import main_api as main_blueprint
from .views.UserView import user_api as user_blueprint
from .views.UserLogView import userlog_api as userlog_blueprint
from .views.SPM91View import spm91_api as spm91_blueprint
from .views.SPM93View import spm93_api as spm93_blueprint
def create_app(env_name):
  """
  Create app
  """

  # app initiliazation
  app = Flask(__name__, static_folder='build', static_url_path='')
  CORS(app)
  app.config.from_object(app_config[env_name])

  # initializing bcrypt and db
  bcrypt.init_app(app)
  db.init_app(app)

  app.register_blueprint(main_blueprint, url_prefix='/api/v1/main')
  app.register_blueprint(user_blueprint, url_prefix='/api/v1/users')
  app.register_blueprint(userlog_blueprint, url_prefix='/api/v1/userlog')
  app.register_blueprint(spm91_blueprint, url_prefix='/api/v1/spm91')
  app.register_blueprint(spm93_blueprint, url_prefix='/api/v1/spm93')

  @app.route('/')
  def index():
    return app.send_static_file('index.html')

  return app

