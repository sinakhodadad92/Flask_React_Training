from flask import request
from flask_restx import Namespace, Resource, fields
from flask_jwt_extended import jwt_required
from models import Recipe
from exts import db


recipe_api = Namespace('recipe', description='Single recipe related operations')

# model serializer
recipe_model = recipe_api.model(
    "Recipe",
    {
        "id": fields.Integer(),
        "title": fields.String(),
        "description": fields.String(),
    }
)

@recipe_api.route("/<int:id>")
class RecipeResource(Resource):
    @recipe_api.marshal_with(recipe_model)
    def get(self, id):
        """Get a recipe by id"""
        recipe = Recipe.query.get_or_404(id)
        return recipe, 200

    @recipe_api.marshal_with(recipe_model)
    @jwt_required()
    def put(self, id):
        """Update a recipe by id"""
        recipe_to_update = Recipe.query.get_or_404(id)
        data = request.get_json()
        recipe_to_update.title = data.get("title")
        recipe_to_update.description = data.get("description")
        
        db.session.commit()
        return recipe_to_update, 200
    
    @recipe_api.marshal_with(recipe_model)
    @jwt_required()
    def delete(self, id):
        """Delete a recipe by id"""
        recipe_to_delete = Recipe.query.get_or_404(id)
        db.session.delete(recipe_to_delete)
        db.session.commit()
        return recipe_to_delete, 204
