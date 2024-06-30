from flask import request, jsonify, make_response
from flask_restx import Namespace, Resource, fields
from models import User
from exts import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import jwt_required, create_access_token, create_refresh_token, get_jwt_identity

auth_ns = Namespace('auth', description='User related operations')

# model serializer
signup_model = auth_ns.model(
    "Signup",
    {
        "username": fields.String(),
        "email": fields.String(),
        "password": fields.String(),
    }
)

login_model = auth_ns.model(
    "Login",
    {
        "username": fields.String(),
        "password": fields.String(),
    }
)

@auth_ns.route('/signup')
class Signup(Resource):
    @auth_ns.expect(signup_model)
    def post(self):
        data = request.get_json()

        user_existed = User.query.filter_by(username=data.get("username")).first()

        if user_existed:
            return jsonify({"message": f"User with username {data.get('username')} already exists"})
        
        new_user = User(username=data.get("username"), email=data.get("email"), password=generate_password_hash(data.get("password")))
        db.session.add(new_user)
        db.session.commit()

        return make_response(jsonify({"message": f"User {data.get('username')} created"}), 201)

@auth_ns.route('/login')
class Login(Resource):
    @auth_ns.expect(login_model)
    def post(self):
        data = request.get_json()

        db_user = User.query.filter_by(username=data.get("username")).first()

        if db_user and check_password_hash(db_user.password, data.get("password")):
            access_token = create_access_token(identity=db_user.username)
            refresh_token = create_refresh_token(identity=db_user.username)

            return jsonify({
                "access_token": access_token,
                "refresh_token": refresh_token
            })
        else:
            return make_response(jsonify({"message": "Invalid credentials"}), 401)

@auth_ns.route('/refresh')
class RefreshResource(Resource):
    @jwt_required(refresh=True)
    def post(self):
        current_user = get_jwt_identity()
        new_access_token = create_access_token(identity=current_user)


        return make_response(jsonify({"access_token": new_access_token}), 200)