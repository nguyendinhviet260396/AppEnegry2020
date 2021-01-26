# src/models/MainData.py
import datetime
from . import db, bcrypt
from src.db import run, connection
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
        return pd.read_sql(query, con=connection)

    @staticmethod
    def getlastsolar(value):

        query = """
            SELECT power,enegry
            FROM spm91table
            WHERE device_id = '%s'
            ORDER BY id DESC LIMIT 1
            """ % (value)
        return pd.read_sql(query, con=connection)

    @staticmethod
    def getlastcomsumption():
        query = """
            SELECT totalactivepower,totalactiveennegry
            FROM spm93table
            ORDER BY id DESC LIMIT 1
            """
        return pd.read_sql(query, con=connection)

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
            df = df.groupby(pd.Grouper(key='timestamp',
                                       freq='5T')).first().reset_index()
            df['totalactivepower'] = (df['totalactivepower']).round(2)
            df['totalactiveennegry'] = df.totalactiveennegry - \
                df.totalactiveennegry.shift()
            df['totalactiveennegry'] = (df['totalactiveennegry']).round(3)
            df = df.fillna(0)
            df['timestamp'] = df['timestamp'].astype(str)
            df_new = pd.concat([df_new, df])
            df_new = df_new[['timestamp',
                             'totalactivepower', 'totalactiveennegry']]
        return df_new

    @staticmethod
    def getlastenegrybyhour(from_date, to_date):
        df_new = pd.DataFrame([])
        query = """
            SELECT totalactiveennegry,timestamp
            FROM spm93table
            WHERE timestamp BETWEEN '%s' AND '%s'
            """ % (from_date, to_date)
        df = pd.read_sql(query, con=connection)
        if len(df) > 0:
            df = df.groupby(pd.Grouper(key='timestamp',
                                       freq='3559S')).first().reset_index()
            df['totalactiveennegry'] = df['totalactiveennegry'].fillna(0)
            df['totalactiveennegry'] = df.totalactiveennegry - \
                df.totalactiveennegry.shift()
            df['totalactiveennegry'] = (df['totalactiveennegry']).round(2)
            df = df.fillna(0)
            df['timestamp'] = df['timestamp'].astype(str)
            df = df.iloc[[1]]
            df_new = pd.concat([df_new, df])
            df_new = df_new[['timestamp', 'totalactiveennegry']]
        return df_new

    @staticmethod
    def getlastenegrybytoday(from_date, to_date):
        df_new = pd.DataFrame([])
        print(to_date.split()[1].split(":")[2])

        query = """
            SELECT totalactiveennegry,timestamp
            FROM spm93table
            WHERE timestamp BETWEEN '%s' AND '%s'
            """ % (from_date, to_date)
        df = pd.read_sql(query, con=connection)
        if len(df) > 0:
            _freq = str(int(to_date.split()[1].split(":")[0])*3600+int(to_date.split()[
                        1].split(":")[1])*60+int(to_date.split()[1].split(":")[2]))+"S"
            if _freq != " ":
                print(_freq)
                df = df.groupby(pd.Grouper(key='timestamp',
                                           freq=_freq)).first().reset_index()
                df['totalactiveennegry'] = df.totalactiveennegry - \
                    df.totalactiveennegry.shift()
                df['totalactiveennegry'] = (df['totalactiveennegry']).round(2)
                df = df.fillna(0)
                df['timestamp'] = df['timestamp'].astype(str)
                df = df.iloc[[1]]
                df_new = pd.concat([df_new, df])
                df_new = df_new[['timestamp', 'totalactiveennegry']]
        return df_new

    @staticmethod
    def getlastenegrybyyesterday(from_date, to_date):
        df_new = pd.DataFrame([])
        query = """
            SELECT totalactiveennegry,timestamp
            FROM spm93table
            WHERE timestamp BETWEEN '%s' AND '%s'
            """ % (from_date, to_date)
        df = pd.read_sql(query, con=connection)
        if len(df) > 0:
            df = df.groupby(pd.Grouper(key='timestamp',
                                       freq='86399S')).first().reset_index()
            df['totalactiveennegry'] = df.totalactiveennegry - \
                df.totalactiveennegry.shift()
            df['totalactiveennegry'] = (df['totalactiveennegry']).round(2)
            df = df.fillna(0)
            df['timestamp'] = df['timestamp'].astype(str)
            df = df.iloc[[1]]
            df_new = pd.concat([df_new, df])
            df_new = df_new[['timestamp', 'totalactiveennegry']]
        return df_new

    @staticmethod
    def getlastenegrybyweek(from_date, to_date):
        df_new = pd.DataFrame([])
        query = """
            SELECT totalactiveennegry,timestamp
            FROM spm93table
            WHERE timestamp BETWEEN '%s' AND '%s'
            """ % (from_date, to_date)
        df = pd.read_sql(query, con=connection)
        if len(df) > 0:
            df = df.groupby(pd.Grouper(key='timestamp',
                                       freq='7D')).first().reset_index()
            df['totalactiveennegry'] = df.totalactiveennegry - \
                df.totalactiveennegry.shift()
            df['totalactiveennegry'] = (df['totalactiveennegry']).round(2)
            df = df.fillna(0)
            df['timestamp'] = df['timestamp'].astype(str)
            df_new = pd.concat([df_new, df])
            df_new = df_new[['timestamp', 'totalactiveennegry']]
        return df_new

    @staticmethod
    def getlastenegrybymothly(from_date, to_date):
        df_new = pd.DataFrame([])
        query = """
            SELECT totalactiveennegry,timestamp
            FROM spm93table
            WHERE timestamp BETWEEN '%s' AND '%s'
            """ % (from_date, to_date)
        df = pd.read_sql(query, con=connection)
        if len(df) > 0:
            df = df.groupby(pd.Grouper(key='timestamp', freq='M')
                            ).first().reset_index()
            df['totalactiveennegry'] = df.totalactiveennegry - \
                df.totalactiveennegry.shift()
            df['totalactiveennegry'] = (df['totalactiveennegry']).round(2)
            df = df.fillna(0)
            df['timestamp'] = df['timestamp'].astype(str)
            df_new = pd.concat([df_new, df])
            df_new = df_new[['timestamp', 'totalactiveennegry']]
        return df_new

    @staticmethod
    def getanalytics(from_date, to_date, area, _type):
        df_new = pd.DataFrame([])
        if (area == "allarea"):
            if _type == "enegry":
                query = """
                SELECT totalactiveennegry,timestamp
                FROM spm93table
                WHERE timestamp BETWEEN '%s' AND '%s'
                """ % (from_date, to_date)
            elif _type == "power":
                query = """
                SELECT totalactivepower,activepower_pa,activepower_pb,activepower_pc,timestamp
                FROM spm93table
                WHERE timestamp BETWEEN '%s' AND '%s'
                """ % (from_date, to_date)
            elif _type == "current":
                query = """
                SELECT current_pa,current_pb,current_pc,timestamp
                FROM spm93table
                WHERE timestamp BETWEEN '%s' AND '%s'
                """ % (from_date, to_date)
            df = pd.read_sql(query, con=connection)
        else:
            query = """
              SELECT %s,timestamp
              FROM spm91table
              WHERE device_id = '%s' AND timestamp BETWEEN '%s' AND '%s'
              """ % (_type, area, from_date, to_date)
            df = pd.read_sql(query, con=connection)

        if len(df) > 0:
            df = df.groupby(pd.Grouper(key='timestamp',
                                       freq='30min')).first().reset_index()
            # df['totalactiveennegry'] = df.totalactiveennegry - df.totalactiveennegry.shift()
            # df['totalactiveennegry'] = (df['totalactiveennegry']).round(2)
            df = df.fillna(0)
            df['timestamp'] = df['timestamp'].astype(str)
            df_new = pd.concat([df_new, df])
            # df_new = df_new[['timestamp','totalactiveennegry']]
        return df_new

    def __repr(self):
        return '<id {}>'.format(self.id)
