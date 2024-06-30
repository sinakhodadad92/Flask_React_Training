from flask import request
from flask_restx import Namespace, Resource, fields
from flask_jwt_extended import jwt_required
from models import Recipe

recipes_api = Namespace('recipes', description='Recipe related operations')

# model serializer
recipe_model = recipes_api.model(
    "Recipe",
    {
        "id": fields.Integer(),
        "title": fields.String(),
        "description": fields.String(),
    }
)

@recipes_api.route("")
class RecipesResource(Resource):
    @recipes_api.marshal_list_with(recipe_model)
    def get(self):
        """Get all recipes"""
        recipes = Recipe.query.all()
        return recipes

    @recipes_api.marshal_with(recipe_model)
    @recipes_api.expect(recipe_model)
    @jwt_required()
    def post(self):
        """Create a new recipe"""
        data = request.get_json()
        new_recipe = Recipe(title=data.get("title"), description=data.get("description"))

        new_recipe.save()
        return new_recipe, 201


