# src/app.py

from flask import Flask, json, Response
from flask_cors import CORS
from .config import app_config
from .models import db, bcrypt
from flask_mail import Mail, Message

# import user_api blueprint
from .views.MainView import main_api as main_blueprint
from .views.AlarmView import alarm_api as alarm_blueprint
from .views.PriceView import price_api as price_blueprint
from .views.EmailAlarmView import email_alarm_api as email_alarm_blueprint
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
    mail = Mail(app)
    # initializing bcrypt and db
    bcrypt.init_app(app)
    db.init_app(app)

    app.register_blueprint(main_blueprint, url_prefix='/api/v1/main')
    app.register_blueprint(alarm_blueprint, url_prefix='/api/v1/alarm')
    app.register_blueprint(price_blueprint, url_prefix='/api/v1/price')
    app.register_blueprint(email_alarm_blueprint,url_prefix='/api/v1/emailalarm')
    app.register_blueprint(user_blueprint, url_prefix='/api/v1/users')
    app.register_blueprint(userlog_blueprint, url_prefix='/api/v1/userlog')
    app.register_blueprint(spm91_blueprint, url_prefix='/api/v1/spm91')
    app.register_blueprint(spm93_blueprint, url_prefix='/api/v1/spm93')

    @app.route('/')
    def index():
        return app.send_static_file('index.html')

    @app.route('/<path>', methods=['GET'])
    def indexpath(path):
        return app.send_static_file('index.html')

    @app.route('/favicon.ico', methods=["GET"])
    def favicon():
        return app.send_static_file('favicon.ico')

    @app.route('/send/alarm', methods=['GET'])
    def sendemail():
        msg = Message('Hello', sender='vietnguyen940@gmail.com',
                      recipients=['vietnguyen260396@gmail.com'])
        msg.body = "Hello Flask message sent from Flask-Mail "
        mail.send(msg)
        return Response(
            mimetype="application/json",
            response=json.dumps({"status": msg.body}),
            status=200
        )

    return app
