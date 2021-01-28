# src/models/SPM93Model.py
import datetime
from . import db, bcrypt
from src.db import run, connection
import pandas as pd
import random


class SPM93Model(db.Model):
    """
    SPM93 Model
    """
    # table name
    __tablename__ = 'spm93table'

    id = db.Column(db.Integer, primary_key=True)
    device_id = db.Column(db.String(128))
    voltage_pa = db.Column(db.Float)
    voltage_pb = db.Column(db.Float)
    voltage_pc = db.Column(db.Float)
    current_pa = db.Column(db.Float)
    current_pb = db.Column(db.Float)
    current_pc = db.Column(db.Float)
    frequency = db.Column(db.Float)
    totalapparentpower = db.Column(db.Float)
    totalactiveennegry = db.Column(db.Float)
    totalreactiveennegry = db.Column(db.Float)
    activepower_pa = db.Column(db.Float)
    activepower_pb = db.Column(db.Float)
    activepower_pc = db.Column(db.Float)
    totalactivepower = db.Column(db.Float)
    reactivepower_pa = db.Column(db.Float)
    reactivepower_pb = db.Column(db.Float)
    reactivepower_pc = db.Column(db.Float)
    totalreactivepower = db.Column(db.Float)
    totalpowerfactor = db.Column(db.Float)
    timestamp = db.Column(db.DateTime)

    # class constructor

    def __init__(self):
        """
        Class constructor
        """
        self.device_id = ''
        self.voltage_pa = ''
        self.voltage_pb = ''
        self.voltage_pc = ''
        self.current_pa = ''
        self.current_pb = ''
        self.current_pc = ''
        self.frequency = ''
        self.totalapparentpower = ''
        self.totalactiveennegry = ''
        self.totalreactiveennegry = ''
        self.activepower_pa = ''
        self.activepower_pb = ''
        self.activepower_pc = ''
        self.totalactivepower = ''
        self.reactivepower_pa = ''
        self.reactivepower_pb = ''
        self.reactivepower_pc = ''
        self.totalreactivepower = ''
        self.totalpowerfactor = ''
        self.timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    def insert(self):
        query = """
    INSERT INTO spm93table (device_id,voltage_pa,voltage_pb,voltage_pc,current_pa,current_pb,current_pc,frequency,totalapparentpower,
    totalactiveennegry,totalreactiveennegry,activepower_pa,activepower_pb,activepower_pc,totalactivepower,reactivepower_pa,reactivepower_pb,
    reactivepower_pc,totalreactivepower,totalpowerfactor,timestamp) 
    VALUES (%s, %s, %s, %s, %s,%s, %s, %s, %s, %s,%s, %s, %s, %s, %s,%s, %s, %s, %s, %s,%s)
    """
        params = (self.device_id, self.voltage_pa, self.voltage_pb, self.voltage_pc, self.current_pa, self.current_pb, self.current_pc, self.frequency,
                  self.totalapparentpower, self.totalactiveennegry, self.totalreactiveennegry, self.activepower_pa, self.activepower_pb, self.activepower_pc,
                  self.totalactivepower, self.reactivepower_pa, self.reactivepower_pb, self.reactivepower_pc, self.totalreactivepower, self.totalpowerfactor, self.timestamp)
        return run(query, params)

    def delete(self):
        query = """
    DELETE  FROM spm93table
    WHERE id = %s;
    """
        params = (self.id)
        return run(query, params)

    @staticmethod
    def getall():
        query = """
            SELECT *
            FROM spm93table
            """
        return pd.read_sql(query, con=connection)

    @staticmethod
    def getlast():
        df_new = pd.DataFrame([])
        query = """
            SELECT *
            FROM spm93table
            ORDER BY id DESC LIMIT 1
            """
        df = pd.read_sql(query, con=connection)
        if len(df) > 0:
            df_new = pd.concat([df_new, df])
        return df_new

    @staticmethod
    def getlast5min(from_date, to_date):
        df_new = pd.DataFrame([])
        query = """
            SELECT *
            FROM spm93table
            WHERE timestamp BETWEEN '%s' AND '%s'
            """ % (from_date, to_date)
        df = pd.read_sql(query, con=connection)
        if len(df) > 0:
            df['totalactivepower'] = (df['totalactivepower']).round(2)
            df['totalactiveennegry'] = (df['totalactiveennegry']).round(2)
            df = df.groupby(pd.Grouper(key='timestamp',
                                       freq='5min')).first().reset_index()
            df = df.fillna(0)
            df['timestamp'] = df['timestamp'].astype(str)
            df_new = pd.concat([df_new, df])
            df_new = df_new[['timestamp',
                             'totalactivepower', 'totalactiveennegry']]
        return df_new

    def __repr(self):
        return '<id {}>'.format(self.id)
