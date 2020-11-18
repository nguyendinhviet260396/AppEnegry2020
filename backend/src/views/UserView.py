#/src/views/UserView
from flask import request, json, Response, Blueprint, g
from ..models.UserModel import UserModel
from ..shared.Authentication import Auth

user_api = Blueprint('user_api', __name__)

@user_api.route('/add', methods=['POST'])
def create():
  """ 
  Create User Function
  """
  value=request.json
  print(value)
  df = UserModel.get_user_by_email(value.get('email'))
  df = df.to_dict(orient= 'records')
  if len(df):
    message = {'error': 'User already exist, please supply another email address'}
    return custom_response(message, 400)
  usermodel = UserModel()
  usermodel.name = value.get('name')
  usermodel.email = value.get('email')
  usermodel.operator = value.get('operator')
  usermodel.password = value.get('password')
  usermodel.insert()
  # create code token
  ser_data = usermodel.getlast()
  ser_data = ser_data.to_dict(orient='records')
  token = Auth.generate_token(ser_data[0].get("id"))
  response={
    "data":ser_data,
    "jwt_token": token
  }
  return custom_response(response, 201)

@user_api.route('/', methods=['GET'])
#@Auth.auth_required
def get_all():
  """
  Get all users
  """
  df = UserModel.getall()
  df = df.to_dict(orient='records')
  print(df)
  return custom_response(df, 200)

@user_api.route('/getname', methods=['GET'])
def getusername():
  value = request.json
  df = UserModel.get_name(value.get('name'))
  df = df.to_dict(orient='records')
  return custom_response(df,200)

@user_api.route('/update', methods=['PUT'])
#@Auth.auth_required
def update():
  """
  Update me
  """
  value= request.json
  df = UserModel.get_user_by_id(value.get('id'))
  df = df.to_dict(orient= 'records')
  if len(df) == '':
    return custom_response(error, 400)
  usemodel = UserModel()
  usemodel.id = value.get('id')
  usemodel.name = value.get('name')
  usemodel.email = value.get('email')
  usemodel.operator = value.get('operator')
  usemodel.password = value.get('password')
  usemodel.update()
  return custom_response('successfull', 202)

@user_api.route('/<int:id>', methods=['DELETE'])
#@Auth.auth_required
def delete(id):
  """
  Delete a user
  """
  usemodel = UserModel()
  usemodel.id = [id]
  usemodel.delete()
  return custom_response({'message': 'deleted'}, 204)


@user_api.route('/login', methods=['POST'])
def login():
  """
  User Login Function
  """
  value = request.json
  if not value.get('email')  or not  value.get('password'):
    return custom_response({'error': 'you need email and password to sign in'}, 400)
  
  df = UserModel.get_user_by_email(value.get('email'))
  df = df.to_dict(orient='records')
  if  not df:
    return custom_response({'error': 'invalid credentials'}, 400)
  usemodel = UserModel()
  pw = usemodel.getpassworemail(value.get('email'))
  pw = pw.to_dict(orient='records')
  pw = pw[0].get('password')
  if not usemodel.check_password(pw,value.get('password')):
    return custom_response({'error': 'invalid credentials'}, 400)
  token = Auth.generate_token(df[0].get('id'))
  Result = {
      "user":df,
      "jwt_token":token
      }
  return custom_response(Result, 200)

def custom_response(res, status_code):
  """
  Custom Response Function
  """
  return Response(
    mimetype="application/json",
    response=json.dumps(res),
    status=status_code
  )
