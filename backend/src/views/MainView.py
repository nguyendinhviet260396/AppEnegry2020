#/src/views/ModelView
from flask import request, json, Response, Blueprint, g
from datetime import datetime

main_api = Blueprint('main_api', __name__)

# get realtime data
@main_api.route('/',methods=['GET'])
def getall():
  value = request.json
  print(value)
  return custom_response(value,200)

def custom_response(res, status_code):
  """
  Custom Response Function
  """
  return Response(
    mimetype="application/json",
    response=json.dumps(res),
    status=status_code
  )
