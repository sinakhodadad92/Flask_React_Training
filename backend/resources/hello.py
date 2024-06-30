from flask_restx import Resource

def hello_resource(api):

    @api.route('/hello')
    class HelloResource(Resource):
        def get(self):
            return {"message": "Hello World!"} 
        
    return HelloResource

