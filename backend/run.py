# /run.py
import os
from dotenv import load_dotenv, find_dotenv
from src.app import create_app

load_dotenv(find_dotenv())

env_name = os.getenv('FLASK_ENV')
app = create_app(env_name)


if __name__ == '__main__':
  app.run(host='0.0.0.0',port=5000)

