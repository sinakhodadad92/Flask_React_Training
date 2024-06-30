from flask import Flask
from flask_restx import Api
from flask_migrate import Migrate
from resources import hello
from resources.recipes import recipes_api as recipes_ns
from resources.recipe import recipe_api as recipe_ns
from resources.auth import auth_ns
from exts import db
from models import Recipe, User
from flask_jwt_extended import JWTManager
from config import DevConfig
from flask_cors import CORS

def create_app(config_class = DevConfig):
    app = Flask(__name__)
    app.config.from_object(config_class)

    CORS(app)

    api = Api(app, doc='/docs')

    hello.hello_resource(api)

    migrate = Migrate(app, db)
    JWTManager(app)
    db.init_app(app)

    # Add the recipes namespace
    api.add_namespace(recipes_ns, path='/recipes')
    # Add the single recipe namespace
    api.add_namespace(recipe_ns, path='/recipe')
    # Add the users namespace
    api.add_namespace(auth_ns, path='/auth')

    @app.shell_context_processor
    def make_shell_context():
        return {
            "db": db,
            "Recipe": Recipe,
            "User": User
        }

    return app

