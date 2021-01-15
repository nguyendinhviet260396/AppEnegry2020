#/src/views/SPM93View
from flask import request, json, Response, Blueprint
from ..models.SPM93Model import SPM93Model
from datetime import datetime,timedelta

time_now =datetime.now()
spm93_api = Blueprint('spm93_api', __name__)

def getlasthour():
  yesterday = datetime.now() - timedelta(hours=1)
  return yesterday.strftime("%Y-%m-%d %H:00:00"), yesterday.strftime("%Y-%m-%d %H:59:59")

def gettoday():
  today = datetime.now()
  return today.strftime("%Y-%m-%d 00:00:00"), today.strftime("%Y-%m-%d 23:59:59")

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


# get realtime data
@spm93_api.route('/getlast',methods=['GET'])
def getlast():
  df = SPM93Model.getlast()
  df = df.to_dict(orient='records')
  return custom_response(df,200)

@spm93_api.route('/', methods=['GET'])
def get_all():
  """
  Get all spm93
  """
  df = SPM93Model.getall()
  df = df.to_dict(orient='records')
  return custom_response(df, 200)

@spm93_api.route('/getlast5min', methods=['GET'])
def getlast5min():
  from_date,to_date = gettoday()
  df = SPM93Model.getlast5min(from_date,to_date)
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


def custom_response(res, status_code):
  """
  Custom Response Function
  """
  return Response(
    mimetype="application/json",
    response=json.dumps(res),
    status=status_code
  )
