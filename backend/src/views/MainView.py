#/src/views/ModelView
from flask import request, json, Response, Blueprint, g
from ..models.MainData import MainData
from datetime import datetime,timedelta
import pandas as pd

time_now =datetime.now()
main_api = Blueprint('main_api', __name__)


def getlasthour():
    yesterday = datetime.now() - timedelta(hours=1)
    return yesterday.strftime("%Y-%m-%d %H:00:00"), yesterday.strftime("%Y-%m-%d %H:59:59")

def gettoday():
    today = datetime.now()
    return today.strftime("%Y-%m-%d 00:00:00"), today.strftime("%Y-%m-%d %H:%M:%S")

def getyesterday():
    yesterday = datetime.now() - timedelta(days=1)
    return yesterday.strftime("%Y-%m-%d 00:00:00"), yesterday.strftime("%Y-%m-%d 23:59:59")

def getlastweek():
    checkday = (datetime.now().isoweekday()) % 7
    lastsunday = datetime.now() - timedelta(days=checkday)
    lastweekmonday = lastsunday - timedelta(days=6)
    return lastweekmonday, lastsunday

def getlastmonth():
    lastmonth = datetime.now().replace(day=1)
    lastmonth = lastmonth - timedelta(days=1)
    return lastmonth.strftime("%Y-%m-01 00:00:00"), lastmonth.strftime("%Y-%m-%d 23:59:59")

def getthismonth():
    today = datetime.now() - datetime.timedelta(minutes=10)
    return today.strftime("%Y-%m-01 00:00:00"), today.strftime("%Y-%m-%d 23:59:59")



@main_api.route('/',methods=['GET'])
def getall():
  df = MainData.getall()
  df = df.to_dict(orient='records')
  return custom_response(df,200)

  
#get last main data
@main_api.route('/getlast',methods=['GET'])
def getlast():
  df_new = []
  df_solar01 = MainData.getlastsolar("solar_01")
  df_solar01 = df_solar01.to_dict(orient='records')
  df_solar02 = MainData.getlastsolar("solar_02")
  df_solar02 = df_solar02.to_dict(orient='records')
  df_consumption = MainData.getlastcomsumption()
  df_consumption = df_consumption.to_dict(orient='records')
  if len(df_solar01) and len(df_solar02) and len(df_consumption):
    df_new.append(df_solar01)
    df_new.append(df_solar02)
    df_new.append(df_consumption)
  return custom_response(df_new,200)

@main_api.route('/getlast5min', methods=['GET'])
def getlast5min():
  from_date,to_date = gettoday()
  df = MainData.getlast5min(from_date,to_date)
  df = df.to_dict(orient='records')
  df_new = []
  df_power = []
  df_enegry = []
  if len(df):
    for i in df:
      df_power.append([datetime.strptime(i['timestamp'], "%Y-%m-%d  %H:%M:%S"),i['totalactivepower']])
      df_enegry.append([datetime.strptime(i['timestamp'], "%Y-%m-%d  %H:%M:%S"),i['totalactiveennegry']])
    df_new.append(df_power)
    df_new.append(df_enegry)
  return custom_response(df_new, 200)

@main_api.route('/getlastenegrybyhour',methods=['GET'])
def getlastenegrybyhour():
  from_date,to_date = getlasthour()
  df = MainData.getlastenegrybyhour(from_date,to_date)
  df = df.to_dict(orient='records')
  return custom_response(df,200)

@main_api.route('/getlastenegrybytoday',methods=['GET'])
def getlastenegrybytoday():
  from_date,to_date = gettoday()
  df = MainData.getlastenegrybytoday(from_date,to_date)
  df = df.to_dict(orient='records')
  return custom_response(df,200)

@main_api.route('/getlastenegrybyyesterday',methods=['GET'])
def getlastenegrybyyesterday():
  from_date,to_date = getyesterday()
  df = MainData.getlastenegrybyyesterday(from_date,to_date)
  df = df.to_dict(orient='records')
  return custom_response(df,200)

@main_api.route('/getlastenegrybyweek',methods=['GET'])
def getlastenegrybyweek():
  from_date,to_date = getlastweek()
  df = MainData.getlastenegrybyweek(from_date,to_date)
  df = df.to_dict(orient='records')
  return custom_response(df,200)

@main_api.route('/getlastenegrybymothly',methods=['GET'])
def getlastenegrybymothly():
  from_date,to_date = getlastmonth()
  df = MainData.getlastenegrybymothly(from_date,to_date)
  df = df.to_dict(orient='records')
  return custom_response(df,200)



@main_api.route('/analytics',methods=['GET'])
def getanalytics():
  area=request.args.get('area')
  _type=request.args.get('type')
  from_date = request.args.get('fromdate')+" "+request.args.get('fromtime')+":00"
  to_date = request.args.get('todate')+" "+request.args.get('totime')+":00"
  df = MainData.getanalytics(from_date,to_date,area,_type)
  df = df.to_dict(orient='records')
  df_new = []
  if len(df):
    if area == "allarea":
      for i in df:
        if _type == "power":
          df_new.append([datetime.strptime(i['timestamp'], "%Y-%m-%d  %H:%M:%S"),i['totalactivepower']])
        elif _type == "enegry":
          df_new.append([datetime.strptime(i['timestamp'], "%Y-%m-%d  %H:%M:%S"),i['totalactiveennegry']])
        elif _type == "current":
          df_new.append([datetime.strptime(i['timestamp'], "%Y-%m-%d  %H:%M:%S"),i['current_pa']])
    else:
      for i in df:
        if _type == "enegry":
          df_new.append([datetime.strptime(i['timestamp'], "%Y-%m-%d  %H:%M:%S"),i['enegry']])
        elif _type == "power":
          df_new.append([datetime.strptime(i['timestamp'], "%Y-%m-%d  %H:%M:%S"),i['power']])
        elif _type == "current":
          df_new.append([datetime.strptime(i['timestamp'], "%Y-%m-%d  %H:%M:%S"),i['current']])
  return custom_response(df_new,200)


def custom_response(res, status_code):
  """
  Custom Response Function
  """
  return Response(
    mimetype="application/json",
    response=json.dumps(res),
    status=status_code
  )
