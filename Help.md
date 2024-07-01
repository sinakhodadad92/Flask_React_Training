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

# we setup proxy in frontend to setup requests for endpoints in package.json
"proxy": "http://127.0.0.1:5000",

# setting up state hook to setup the state of our message

import React, {useState, useEffect} from 'react'

useState allows you to manage state in a functional component, while useEffect enables side effects, like fetching data or updating the DOM in response to state or prop changes.

The DOM is like a blueprint of a webpage that lets programs change its content and appearance.

# error with "proxy": "http://localhost:6000" inside package.json
https://stackoverflow.com/questions/70374005/invalid-options-object-dev-server-has-been-initialized-using-an-options-object

# React Router: React Router is a library for managing and navigating between different views or pages in a React application.
npm install react-router-dom

npm install react-bootstrap bootstrap

# create components folder for components like navbar for instance


Sure! Here's a simple explanation of what each of these do:

1. **`import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';`**:
   - This line imports three components (`BrowserRouter`, `Route`, and `Switch`) from the `react-router-dom` library, which is used for handling routing in a React application.

2. **`BrowserRouter` (alias `Router`)**:
   - **Purpose**: Wraps your entire application and enables routing.
   - **Usage**: It listens to URL changes and renders the appropriate components.
   - **Analogy**: Think of it as the central hub that manages and coordinates navigation in your app.

3. **`Route`**:
   - **Purpose**: Defines a mapping between a URL path and a component.
   - **Usage**: It tells your app which component to display when the URL matches a specific path.
   - **Analogy**: Like setting up directions where each path leads to a specific page.

4. **`Switch`**:
   - **Purpose**: Ensures that only one route is rendered at a time.
   - **Usage**: It goes through each `Route` inside it and renders the first one that matches the current URL.
   - **Analogy**: Think of it as a railway switch that directs a train to the correct track.

### Example Usage

Here's a simple example to show how these work together:

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;
```

### Explanation of Example

1. **`Router`**:
   - Wraps the entire `App` component to enable routing.

2. **`Routes`**:
   - Ensures that only one of the `Route` components is rendered based on the current URL.

3. **`Route`**:
   - `Route exact path="/" component={Home}`: When the URL path is exactly `/`, it renders the `Home` component.
   - `Route path="/about" component={About}`: When the URL path is `/about`, it renders the `About` component.

In summary, these components together help you manage navigation in your React application, allowing you to define which component should be displayed for which URL path.

import { Link } from 'react-router-dom';
