python -m venv myenv
source myenv/bin/activate
-- pip install flask flask_restx flask_sqlalchemy flask_jwt_extended python_decouple python-dotenv

See the documentation for apis : 127.0.0.1:5000/docs

# for Flask shell
export FLASK_APP=main.py
flask shell

# test with 
Recipe
db.create_all() # to create all the tables defined in your models

pip freeze > requirements.txt

pip install flask_migrate

# to make sure if we have access to commands inside flask we need, if it comes main.py cool
echo $FLASK_APP 

# if not, run FLASK_APP=main.py, remember it should be run in the folder contain main.py
for instance:
flask shell

# to see the options of db
flask db 

flask db init : Creates a new migration repository.
flask db migrate -m "add user table"

schema will be created after this command after that we need to run 
flask db upgrade

# FLASK JWT Authentication

werkzeug for security and it helps for creating password we can use it for security and create hashed passwords

we put @jwr_required on top of every endpoint we want to protect
after that for any action we should put access_token in auth bearer

# for testing
python test_api.py

# with jsonify we made can make a simple dic for response, but with make_response we make response with status code

# error 405 is because we had not specified the route. 

# so after unit testing and creating a refreshing setup

nvm list
nvm use 10.24.1 # 20.13.1

npx create-react-app client or frontend
npm install
npm start

# in case of error with
npm install --save-dev ajv@^7 

# the cors setup: cross origin resource sharing
# helping us to share resources between the clients (frontends)
# for example backend works on port 5000 and frontend works on port 3000, so to communicate we have to configure cors code. 
# to install it

pip install flask-cors
CORS(app) to configuring the app

# we setup proxy in frontend to setup requests for endpoints 
# 


