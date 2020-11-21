# src/models/MainData.py
import datetime
from src.db import run,connection
import pandas as pd

class MainData:
  """
  Main data
  """
  # class constructor
  def __init__(self):
    """
    Class constructor
    """
  @staticmethod
  def getall():
    query = """
            SELECT enegry,timestamp
            FROM spm91table
            """
    return pd.read_sql(query,con=connection)
  
  @staticmethod 
  def getlastsolar(value):
    query = """
            SELECT power,enegry
            FROM spm91table
            WHERE device_id = '%s'
            ORDER BY id DESC LIMIT 1
            """%(value)
    return pd.read_sql(query,con=connection)

  @staticmethod 
  def getlastcomsumption():
    query = """
            SELECT totalactivepower,totalactiveennegry
            FROM spm93table
            ORDER BY id DESC LIMIT 1
            """
    return pd.read_sql(query,con=connection)

  @staticmethod 
  def getlast5min(from_date, to_date):
    df_new = pd.DataFrame([])
    query = """
            SELECT *
            FROM spm93table
            WHERE timestamp BETWEEN '%s' AND '%s'
            """ % (from_date,to_date)
    df = pd.read_sql(query, con=connection)
    if len(df) > 0:
      df['totalactivepower'] = (df['totalactivepower']).round(2)
      df['totalactiveennegry'] = (df['totalactiveennegry']).round(2)
      df = df.groupby(pd.Grouper(key='timestamp', freq='1min')).first().reset_index()
      df = df.fillna(0)
      df['timestamp'] = df['timestamp'].astype(str)
      df_new = pd.concat([df_new, df])
      df_new = df_new[['timestamp','totalactivepower','totalactiveennegry']]
    return df_new

  @staticmethod 
  def getlastenegrybyhour(from_date, to_date):
    df_new = pd.DataFrame([])
    query = """
            SELECT totalactiveennegry,timestamp
            FROM spm93table
            WHERE timestamp BETWEEN '%s' AND '%s'
            """ % (from_date,to_date)
    df = pd.read_sql(query, con=connection)
    if len(df) > 0:
      df = df.groupby(pd.Grouper(key='timestamp', freq='H')).first().reset_index()
      df['totalactiveennegry'] = df.totalactiveennegry - df.totalactiveennegry.shift()
      df['totalactiveennegry'] = (df['totalactiveennegry']).round(2)
      df = df.fillna(0)
      df['timestamp'] = df['timestamp'].astype(str)
      df_new = pd.concat([df_new, df])
      df_new = df_new[['timestamp','totalactiveennegry']]
    return df_new


  @staticmethod 
  def getlastenegrybytoday(from_date, to_date):
    df_new = pd.DataFrame([])
    query = """
            SELECT totalactiveennegry,timestamp
            FROM spm93table
            WHERE timestamp BETWEEN '%s' AND '%s'
            """ % (from_date,to_date)
    df = pd.read_sql(query, con=connection)
    if len(df) > 0:
      df = df.groupby(pd.Grouper(key='timestamp', freq='D')).first().reset_index()
      df['totalactiveennegry'] = df.totalactiveennegry - df.totalactiveennegry.shift()
      df['totalactiveennegry'] = (df['totalactiveennegry']).round(2)
      df = df.fillna(0)
      df['timestamp'] = df['timestamp'].astype(str)
      df_new = pd.concat([df_new, df])
      df_new = df_new[['timestamp','totalactiveennegry']]
    return df_new

  @staticmethod 
  def getlastenegrybyyesterday(from_date, to_date):
    df_new = pd.DataFrame([])
    query = """
            SELECT totalactiveennegry,timestamp
            FROM spm93table
            WHERE timestamp BETWEEN '%s' AND '%s'
            """ % (from_date,to_date)
    df = pd.read_sql(query, con=connection)
    if len(df) > 0:
      df = df.groupby(pd.Grouper(key='timestamp', freq='D')).first().reset_index()
      df['totalactiveennegry'] = df.totalactiveennegry - df.totalactiveennegry.shift()
      df['totalactiveennegry'] = (df['totalactiveennegry']).round(2)
      df = df.fillna(0)
      df['timestamp'] = df['timestamp'].astype(str)
      df_new = pd.concat([df_new, df])
      df_new = df_new[['timestamp','totalactiveennegry']]
    return df_new


  @staticmethod 
  def getlastenegrybyweek(from_date, to_date):
    df_new = pd.DataFrame([])
    query = """
            SELECT totalactiveennegry,timestamp
            FROM spm93table
            WHERE timestamp BETWEEN '%s' AND '%s'
            """ % (from_date,to_date)
    df = pd.read_sql(query, con=connection)
    if len(df) > 0:
      df = df.groupby(pd.Grouper(key='timestamp', freq='7D')).first().reset_index()
      df['totalactiveennegry'] = df.totalactiveennegry - df.totalactiveennegry.shift()
      df['totalactiveennegry'] = (df['totalactiveennegry']).round(2)
      df = df.fillna(0)
      df['timestamp'] = df['timestamp'].astype(str)
      df_new = pd.concat([df_new, df])
      df_new = df_new[['timestamp','totalactiveennegry']]
    return df_new

  @staticmethod 
  def getlastenegrybymothly(from_date, to_date):
    df_new = pd.DataFrame([])
    query = """
            SELECT totalactiveennegry,timestamp
            FROM spm93table
            WHERE timestamp BETWEEN '%s' AND '%s'
            """ % (from_date,to_date)
    df = pd.read_sql(query, con=connection)
    if len(df) > 0:
      df = df.groupby(pd.Grouper(key='timestamp', freq='M')).first().reset_index()
      df['totalactiveennegry'] = df.totalactiveennegry - df.totalactiveennegry.shift()
      df['totalactiveennegry'] = (df['totalactiveennegry']).round(2)
      df = df.fillna(0)
      df['timestamp'] = df['timestamp'].astype(str)
      df_new = pd.concat([df_new, df])
      df_new = df_new[['timestamp','totalactiveennegry']]
    return df_new


  def __repr(self):
    return '<id {}>'.format(self.id)



