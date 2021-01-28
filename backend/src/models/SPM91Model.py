# src/models/SPM91Model.py
import datetime
from . import db, bcrypt
from src.db import run, connection
import pandas as pd


class SPM91Model(db.Model):
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
        params = (self.device_id, self.frequency, self.voltage,
                  self.current, self.power, self.enegry, self.timestamp)
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
        return pd.read_sql(query, con=connection)

    @staticmethod
    def getlast(value):
        query = """
            SELECT *
            FROM spm91table
            WHERE device_id = '%s'
            ORDER BY id DESC LIMIT 1
            """ % (value)
        return pd.read_sql(query, con=connection)

    @staticmethod
    def getlast5min(from_date, to_date, value):
        df_new = pd.DataFrame([])
        query = """
            SELECT timestamp,power,enegry
            FROM spm91table
            WHERE timestamp BETWEEN '%s' AND '%s' AND device_id = '%s'
            """ % (from_date, to_date, value)
        df = pd.read_sql(query, con=connection)
        if len(df) > 0:
            df['power'] = (df['power']/1000).round(2)
            df['enegry'] = (df['enegry']).round(2)
            df = df.groupby(pd.Grouper(key='timestamp',
                                       freq='5min')).first().reset_index()
            df['enegry'] = df.enegry - df.enegry.shift()
            df = df.fillna(0)
            df['timestamp'] = df['timestamp'].astype(str)
            df_new = pd.concat([df_new, df])
        return df_new

    @staticmethod
    def getenegrybytoday(from_date, to_date, value):
        df_new = pd.DataFrame([])
        query = """
            SELECT timestamp,power,enegry
            FROM spm91table
            WHERE timestamp BETWEEN '%s' AND '%s' AND device_id = '%s'
            """ % (from_date, to_date, value)
        df = pd.read_sql(query, con=connection)
        # if len(df) > 0:
        #     _freq = str(int(to_date.split()[1].split(":")[0])*3600+int(to_date.split()[
        #                 1].split(":")[1])*60+int(to_date.split()[1].split(":")[2]))+"S"
        #     if _freq != " ":
        #         print(_freq)
        #         df = df.groupby(pd.Grouper(key='timestamp',
        #                                    freq=_freq)).first().reset_index()
        #         df['enegry'] = df.enegry - df.enegry.shift()
        #         df['enegry'] = (df['enegry']).round(3)
        #         df = df.fillna(0)
        #         df['timestamp'] = df['timestamp'].astype(str)
        #         df = df.iloc[[1]]
        #         df_new = pd.concat([df_new, df])
        #         df_new = df_new[['timestamp', 'enegry']]
        return df

    @staticmethod
    def getenegrybyyesterday(from_date, to_date, value):
        df_new = pd.DataFrame([])
        query = """
            SELECT timestamp,power,enegry
            FROM spm91table
            WHERE timestamp BETWEEN '%s' AND '%s' AND device_id = '%s'
            """ % (from_date, to_date, value)
        df = pd.read_sql(query, con=connection)
        # if len(df) > 0:
        #     df = df.groupby(pd.Grouper(key='timestamp',
        #                                freq='86399S')).first().reset_index()
        #     df['enegry'] = df.enegry - \
        #         df.enegry.shift()
        #     df['enegry'] = (df['enegry']).round(3)
        #     df = df.fillna(0)
        #     df['timestamp'] = df['timestamp'].astype(str)
        #     df = df.iloc[[1]]
        #     df_new = pd.concat([df_new, df])
        #     df_new = df_new[['timestamp', 'enegry']]
        return df_new

    @staticmethod
    def getenegrybyweek(from_date, to_date, value):
        df_new = pd.DataFrame([])
        query = """
            SELECT timestamp,power,enegry
            FROM spm91table
            WHERE timestamp BETWEEN '%s' AND '%s' AND device_id = '%s'
            """ % (from_date, to_date, value)
        df = pd.read_sql(query, con=connection)
        if len(df) > 0:
            df = df.groupby(pd.Grouper(key='timestamp',
                                       freq='7D')).first().reset_index()
            df['enegry'] = df.enegry - df.enegry.shift()
            df['enegry'] = (df['enegry']).round(3)
            df = df.fillna(0)
            df['timestamp'] = df['timestamp'].astype(str)
            df_new = pd.concat([df_new, df])
            df_new = df_new[['timestamp', 'enegry']]
        return df_new

    @staticmethod
    def getenegrybymothly(from_date, to_date, value):
        df_new = pd.DataFrame([])
        query = """
            SELECT timestamp,power,enegry
            FROM spm91table
            WHERE timestamp BETWEEN '%s' AND '%s' AND device_id = '%s'
            """ % (from_date, to_date, value)
        df = pd.read_sql(query, con=connection)
        if len(df) > 0:
            df = df.groupby(pd.Grouper(key='timestamp', freq='M')
                            ).first().reset_index()
            df['enegry'] = df.enegry - df.enegry.shift()
            df['enegry'] = (df['enegry']).round(2)
            df = df.fillna(0)
            df['timestamp'] = df['timestamp'].astype(str)
            df_new = pd.concat([df_new, df])
            df_new = df_new[['timestamp', 'enegry']]
        return df_new

    def __repr(self):
        return '<id {}>'.format(self.id)
