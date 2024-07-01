import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from "react-dom/client";
import NavBar from './components/Navbar'; 

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import CreateRecipe from './components/CreateRecipe';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  return (
    <Router>
      <div className='container'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/create_recipe' element={<CreateRecipe />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

root.render(
  <App />
);
