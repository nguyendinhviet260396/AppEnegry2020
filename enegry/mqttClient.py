
import psycopg2 as pg
import os
import json
import datetime
import pandas as pd
import paho.mqtt.client as mqtt
from datetime import datetime
# config broker
# _host = "m16.cloudmqtt.com"
# _port = 16584
# _user_name = "pwwgnjod"
# _pass_word = "XBgUZD1EvzDa"


_host = "x1576841.en.emqx.cloud"
_port = 11316
_user_name = "vietnguyen940@gmail.com"
_pass_word = "Anhvjet96"


# config soucer database
db_host = 'localhost'
db_name = 'powermanagesystem'
db_user = 'postgres'
db_pass = '0000'

# connect to database postgresSQL

connection = pg.connect("host='"+db_host+"' dbname='" +
                        db_name+"' user='"+db_user+"' password='"+db_pass+"'")
# funcion query database


def run(query, params):
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(query, params)
            connection.commit()
            return True

# The callback for when the client receives a CONNACK response from the server.


def on_connect(client, userdata, flags, rc):
    print("Connection to Broker {}:{} Successfully!".format(_host, _port))
    client.subscribe(("ems/#", 1))

# The callback for when a PUBLISH message is received from the server.


def on_message(client, userdata, msg):
    topic = msg.topic
    content = msg.payload.decode('utf-8')
    objpayload = json.loads(content)
    if objpayload["sensorDatas"][0]["flag"].find("REG") != -1:
        print(objpayload["sensorDatas"])
        query = """
             INSERT INTO assets(topic,data,timestamp)
             VALUES (%s,%s,%s)
         """
        if int(objpayload["time"]) > 0:
            params = (topic, json.dumps(objpayload["sensorDatas"]),
                      datetime.fromtimestamp(int(objpayload["time"])))
            run(query, params)


# connect to broker
client = mqtt.Client()
client.connect(_host, _port, 60)
client.username_pw_set(_user_name, _pass_word)
client.on_connect = on_connect
client.on_message = on_message
client.loop_forever()
