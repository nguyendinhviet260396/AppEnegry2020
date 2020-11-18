import random
import time
import json
from datetime import datetime
from config.mqtt import  connect_mqtt


def dataSPM91_01():
    data ={
        "device_id":"fish_tank_area",
        "frequency":round(random.uniform(49,51),3),
        "voltage":round(random.uniform(210,240),3),
        "current":round(random.uniform(0,45),3),
        "power":round(random.uniform(0,5000),3),
        "enegry":round((time.time())/100000,3),
        "timestamp":datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    connect_mqtt("emsenegry",json.dumps(data))
    return data

def dataSPM91_02():
    data ={
        "device_id":"terrace_area",
        "frequency":round(random.uniform(49,51),3),
        "voltage":round(random.uniform(210,240),3),
        "current":round(random.uniform(0,45),3),
        "power":round(random.uniform(0,5000),3),
        "enegry":round((time.time())/100000,3),
        "timestamp":datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    connect_mqtt("emsenegry",json.dumps(data))
    return data
def dataSPM91_03():
    data ={
        "device_id":"solar_01",
        "frequency":round(random.uniform(49,51),3),
        "voltage":round(random.uniform(210,240),3),
        "current":round(random.uniform(0,45),3),
        "power":round(random.uniform(0,5000),3),
        "enegry":round((time.time())/100000,3),
        "timestamp":datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    connect_mqtt("emsenegry",json.dumps(data))
    return data
def dataSPM91_04():
    data ={
        "device_id":"solar_02",
        "frequency":round(random.uniform(49,51),3),
        "voltage":round(random.uniform(210,240),3),
        "current":round(random.uniform(0,45),3),
        "power":round(random.uniform(0,5000),3),
        "enegry":round((time.time())/100000,3),
        "timestamp":datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    connect_mqtt("emsenegry",json.dumps(data))
    return data

def dataSPM93():
    data ={
        "device_id":"all_area",
        "voltage_pa":round(random.uniform(210,240),3),
        "voltage_pb":round(random.uniform(210,240),3),
        "voltage_pc":round(random.uniform(210,240),3),
        "current_pa":round(random.uniform(0,240),3),
        "current_pb":round(random.uniform(0,240),3),
        "current_pc":round(random.uniform(0,240),3),
        "frequency":round(random.uniform(49,51),3),
        "totalapparentpower":round(random.uniform(0,1000),3),
        "totalactiveennegry":round((time.time())/1000,3),
        "totalreactiveennegry":round((time.time())/100000,3),
        "activepower_pa":round(random.uniform(0,10000),3),
        "activepower_pb":round(random.uniform(0,10000),3),
        "activepower_pc":round(random.uniform(0,10000),3),
        "totalactivepower":round(random.uniform(0,10000),3),
        "reactivepower_pa":round(random.uniform(0,300),3),
        "reactivepower_pb":round(random.uniform(0,300),3),
        "reactivepower_pc":round(random.uniform(0,300),3),
        "totalreactivepower":round(random.uniform(0,1000),3),
        "timestamp":datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    connect_mqtt("emsenegry",json.dumps(data))
    return data

if __name__== "__main__":
    while True:
        dataSPM91_01()
        dataSPM91_02()
        dataSPM91_03()
        dataSPM91_04()
        dataSPM93()
        time.sleep(1)