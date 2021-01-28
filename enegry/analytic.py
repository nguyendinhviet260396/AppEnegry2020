import os
import json
import ast
import time
import pandas as pd
import psycopg2 as pg
from datetime import datetime
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from urllib.parse import urlparse

result = urlparse(os.getenv('DATABASE_URL'))

# parse url database
username = result.username
password = result.password
database = result.path[1:]
hostname = result.hostname

# connect to database postgresSQL

connection = pg.connect(
    database=database,
    user=username,
    password=password,
    host=hostname
)
# funcion query database


def run(query, params):
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(query, params)
            connection.commit()
            return True
# xư lý thanh ghi


def send_email(data):
    # config email
    msg = MIMEMultipart()
    msg['From'] = "vietnguyen940@gmail.com"
    msg['To'] = "vietnguyen260396@gmail.com"
    msg['Subject'] = "Alarm Enegry"
    email = smtplib.SMTP('smtp.gmail.com', 587)
    email.starttls()
    email.login("vietnguyen940@gmail.com", "anhvjet96")
    msg.attach(MIMEText(data, 'plain'))
    email.sendmail("vietnguyen940@gmail.com",
                   "vietnguyen260396@gmail.com", msg.as_string())
    email.quit()


def analyticRegister(a, b):
    if a < 0:
        value = ''.join(["0x", hex(abs(b))[2:].zfill(4)])
        value = ast.literal_eval(value)
        return a*value
    else:
        value = ''.join(["0x", hex(a)[2:].zfill(4), hex(b)[2:].zfill(4)])
        value = ast.literal_eval(value)
        return value

# get data from database


def getdata():
    df_new = pd.DataFrame([])
    query = """
            SELECT *
            FROM assets
            ORDER BY id DESC LIMIT 3
            """
    df = pd.read_sql(query, con=connection)
    if len(df) > 0:
        for i in range(0, len(df)):
            df_new = df_new.append(ast.literal_eval(df["data"][i]))
        df_new.sort_values(['flag', 'value'], ascending=[
                           True, False], inplace=True)
        df_new = df_new.to_dict(orient='records')
        dataSelect = {}
        for x in range(0, len(df_new)):
            dataSelect[df_new[x]["flag"]] = int(df_new[x]['value'])
        print(len(dataSelect))
        if len(dataSelect) == 69:
            # add data in database SPM91table
            query = """
                INSERT INTO spm91table(device_id,frequency,voltage,current,power,enegry,timestamp) VALUES (%s,%s,%s,%s,%s,%s,%s)
            """
            params = ("fish_tank_area", round(dataSelect["REG20011"]*0.01, 2), round(dataSelect["REG20002"]*0.01, 2), round((analyticRegister(dataSelect["REG20004"], dataSelect["REG20003"]))*0.0001, 3), round((analyticRegister(
                dataSelect["REG20006"], dataSelect["REG20005"]))*0.1, 3), round((analyticRegister(dataSelect["REG20001"], dataSelect["REG20000"]))*0.1, 3), datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
            run(query, params)
            params = ("solar_01", round(dataSelect["REG20023"]*0.01, 2), round(dataSelect["REG20014"]*0.01, 2), round((analyticRegister(dataSelect["REG20016"], dataSelect["REG20015"]))*0.0001, 3), round((analyticRegister(
                dataSelect["REG20018"], dataSelect["REG20017"]))*0.1, 3), round((analyticRegister(dataSelect["REG20013"], dataSelect["REG20012"]))*0.1, 3), datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
            run(query, params)
            params = ("solar_02", round(dataSelect["REG20035"]*0.01, 2), round(dataSelect["REG20026"]*0.01, 2), round((analyticRegister(dataSelect["REG20028"], dataSelect["REG20027"]))*0.0001, 3), round((analyticRegister(
                dataSelect["REG20030"], dataSelect["REG20029"]))*0.1, 3), round((analyticRegister(dataSelect["REG20025"], dataSelect["REG20024"]))*0.1, 3), datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
            run(query, params)
            # add data in database SPM93table
            query = """
                INSERT INTO spm93table(device_id,voltage_pa,voltage_pb,voltage_pc,current_pa,current_pb,current_pc,frequency,totalapparentpower,totalactiveennegry,totalreactiveennegry,
                activepower_pa,activepower_pb,activepower_pc,totalactivepower,reactivepower_pa,reactivepower_pb,reactivepower_pc,totalreactivepower,totalpowerfactor,timestamp)
                VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
            """
            params = ("all_area",
                      round(dataSelect["REG20036"]*0.01, 2),
                      round(dataSelect["REG20037"]*0.01, 2),
                      round(dataSelect["REG20038"]*0.01, 2),
                      round(analyticRegister(
                          dataSelect["REG20040"], dataSelect["REG20039"])*0.001, 2),
                      round(analyticRegister(
                          dataSelect["REG20042"], dataSelect["REG20041"])*0.001, 2),
                      round(analyticRegister(
                          dataSelect["REG20044"], dataSelect["REG20043"])*0.001, 2),
                      round(dataSelect["REG20045"]*0.01, 2),
                      round(analyticRegister(
                          dataSelect["REG20048"], dataSelect["REG20047"]) * 0.01, 2),
                      round(analyticRegister(
                          dataSelect["REG20050"], dataSelect["REG20049"])*0.1, 2),
                      round(analyticRegister(
                          dataSelect["REG20052"], dataSelect["REG20051"])*0.1, 2),
                      round(analyticRegister(
                          dataSelect["REG20054"], dataSelect["REG20053"])*0.01, 2),
                      round(analyticRegister(
                          dataSelect["REG20056"], dataSelect["REG20055"]) * 0.01, 2),
                      round(analyticRegister(
                          dataSelect["REG20058"], dataSelect["REG20057"])*0.01, 2),
                      round(analyticRegister(
                          dataSelect["REG20060"], dataSelect["REG20059"]) * 0.01, 2),
                      round(analyticRegister(
                          dataSelect["REG20062"], dataSelect["REG20061"])*0.01, 2),
                      round(analyticRegister(
                          dataSelect["REG20064"], dataSelect["REG20063"]) * 0.01, 2),
                      round(analyticRegister(
                          dataSelect["REG20066"], dataSelect["REG20065"])*0.01, 2),
                      round(analyticRegister(
                          dataSelect["REG20068"], dataSelect["REG20067"])*0.01, 2),
                      round(dataSelect["REG20046"]*0.001, 2),
                      datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
            run(query, params)
        else:
            send_email("Dữ liệu bị mất !")

    return len(dataSelect)


if __name__ == '__main__':
    while True:
        getdata()
        time.sleep(10)
