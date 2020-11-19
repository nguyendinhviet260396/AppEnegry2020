# src/models/SPM91Model.py
import datetime
from . import db, bcrypt
from src.db import run,connection
import pandas as pd
import random

class SPM91Model:
  """
  SPM91 Model
  """
  # table name
  __tablename__ = 'spm91table'

  id = db.Column(db.Integer, primary_key=True)
  device_id = db.Column(db.String(128))
  frequency = db.Column(db.Float)
  voltage = db.Column(db.Float)
  current = db.Column(db.Float)
  power = db.Column(db.Float)
  enegry = db.Column(db.Float)
  timestamp = db.Column(db.DateTime)
  # class constructor
  def __init__(self):
    """
    Class constructor
    """
    self.device_id = ''
    self.frequency = ''
    self.voltage = ''
    self.current = ''
    self.power = ''
    self.enegry = ''
    self.timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
  def insert(self):
    query = """
    INSERT INTO spm91table (device_id, frequency, voltage, current, power, enegry,timestamp) 
    VALUES (%s, %s, %s, %s, %s, %s, %s)
    """
    params = (self.device_id, self.frequency, self.voltage, self.current, self.power,self.enegry, self.timestamp)
    return run(query, params)

  def delete(self):
    query = """
    DELETE  FROM spm91table
    WHERE id = %s;
    """
    params = (self.id)
    return run(query, params)

  @staticmethod
  def getall():
    query = """
            SELECT enegry,timestamp
            FROM spm91table
            """
    return pd.read_sql(query,con=connection)
  
  @staticmethod 
  def getlast(value):
    query = """
            SELECT *
            FROM spm91table
            WHERE device_id = '%s'
            ORDER BY id DESC LIMIT 1
            """%(value)
    return pd.read_sql(query,con=connection)

  @staticmethod
  def getlast5min(from_date, to_date, value):
    df_new = pd.DataFrame([])
    query = """
            SELECT timestamp,power,enegry
            FROM spm91table
            WHERE timestamp BETWEEN '%s' AND '%s' AND device_id = '%s'
            """ % (from_date, to_date,value)
    df = pd.read_sql(query, con=connection)
    if len(df) > 0 :
      df['power'] = (df['power']).round(2)
      df['enegry'] = (df['enegry']).round(2)
      df = df.groupby(pd.Grouper(key='timestamp', freq='1min')).first().reset_index()
      df = df.fillna(0)
      df['timestamp'] = df['timestamp'].astype(str)
      df_new = pd.concat([df_new, df])
    return df_new


  
  def __repr(self):
    return '<id {}>'.format(self.id)

