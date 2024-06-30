import unittest
from main import create_app
from config import TestConfig
from exts import db

class APITestCase(unittest.TestCase):
    def setUp(self):
        self.app = create_app(TestConfig)
        self.client = self.app.test_client(self)

        with self.app.app_context():
            #db.init_app(self.app)
            db.create_all()

    def tearDown(self):
        with self.app.app_context():
            db.session.remove()
            db.drop_all()

    def test_hello(self):
        hello_response = self.client.get('/hello')
        json_hello = hello_response.json
        # print(json_hello)
        self.assertEqual(json_hello, {'message': 'Hello World!'})

    def test_signup(self):
        signup_response = self.client.post('/auth/signup', json={
            'username': 'testuser',
            'email': 'test@test.com',
            'password': 'password'
        })
        status_code = signup_response.status_code

        self.assertEqual(status_code, 201)

    def test_login(self):
        signup_response = self.client.post('/auth/signup', json={
            'username': 'testuser',
            'email': 'test@test.com',
            'password': 'password'
        })
         
        login_response = self.client.post('/auth/login',json={
            "username": "testuser",
            "password": "password"

        })

        status_code = login_response.status_code
        json = login_response.json
        # print(json)
        self.assertEqual(status_code, 200)

    
    def test_get_recipes(self):
        """ TEST GETTING ALL RECIPES """
        recipes_response = self.client.get('/recipes')

        status_code = recipes_response.status_code
        json_recipes = recipes_response.json
        # print(json_recipes)

        self.assertEqual(status_code, 200)

    def test_get_one_recipe(self):
        """ TEST GETTING ONE RECIPE """
        id = 1
        recipe_response = self.client.get(f'/recipe/{id}')

        status_code = recipe_response.status_code
        json_recipe = recipe_response.json
        print(json_recipe)

        self.assertEqual(status_code, 404)
        

    def test_create_recipe(self):
        """TEST CREATE ONE RECIPE"""
        signup_response = self.client.post('/auth/signup', json={
            'username': 'testuser',
            'email': 'test@test.com',
            'password': 'password'
        })
         
        login_response = self.client.post('/auth/login',json={
            "username": "testuser",
            "password": "password"

        })

        print(login_response)
        access_token = login_response.json['access_token']
        
        create_recipe_response = self.client.post('/recipes',
            json={"title": "Test Cookie", "description": "Test description"},
            headers={"Authorization": f"Bearer {access_token}"}
        )

        status_code = create_recipe_response.status_code
        print(create_recipe_response.json)

        self.assertEqual(status_code, 201)
        

    def test_update_recipe(self):
        """TEST CREATE ONE RECIPE"""
        signup_response = self.client.post('/auth/signup', json={
            'username': 'testuser',
            'email': 'test@test.com',
            'password': 'password'
        })
         
        login_response = self.client.post('/auth/login',json={
            "username": "testuser",
            "password": "password"

        })

        # print(login_response)
        access_token = login_response.json['access_token']
        
        create_recipe_response = self.client.post('/recipes',
            json={"title": "Test Cookie", "description": "Test description"},
            headers={"Authorization": f"Bearer {access_token}"}
        )

        # print(create_recipe_response.json)

        

        id = 1
        update_response = self.client.put(f'/recipe/{id}',
            json={"title": "Test Cookie updated", "description": "Test description updated"},
            headers={"Authorization": f"Bearer {access_token}"}                     
        )

        print(update_response)
        status_code = update_response.status_code
        self.assertEqual(status_code, 200)


    def test_delete_recipe(self):
        """TEST DELETE ONE RECIPE"""
        signup_response = self.client.post('/auth/signup', json={
            'username': 'testuser',
            'email': 'test@test.com',
            'password': 'password'
        })
         
        login_response = self.client.post('/auth/login',json={
            "username": "testuser",
            "password": "password"
        })

        # print(login_response)
        access_token = login_response.json['access_token']
        
        create_recipe_response = self.client.post('/recipes',
            json={"title": "Test Cookie", "description": "Test description"},
            headers={"Authorization": f"Bearer {access_token}"}
        )
        id=1
        delete_response = self.client.delete(f'recipe/{id}', headers={"Authorization": f"Bearer {access_token}"})
        status_code = delete_response.status_code
        self.assertEqual(status_code, 204)




    
if __name__ == '__main__':
    unittest.main()


