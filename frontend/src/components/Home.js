import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth";
import Recipe from "./Recipe";

const LoggedinHome = () => {
    const [recipes, setRecipes] = React.useState([]);
    useEffect(() => {
        fetch("/api/recipes")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setRecipes(data);
            })
            .catch(error => {
                console.error("There was an error", error)
            })
    }   
    , []);
    return (
        <div className="recipes">
            <h1 className="heading"> List of the Recipes</h1>
            <div className="recipe-list">
                {recipes.map(recipe => {
                    return <Recipe key={recipe.id} title={recipe.title} description={recipe.description} />
                })}
            </div>
        </div>
    );
}

const LoggedoutHome = () => {
    return (
        <div className="home container">
            <h1 className="heading"> Welcome to the Recipes</h1>
            <Link to="/signup" className="btn btn-primary btn-large">Get started</Link>
        </div>
    );
}

const Home = () => {
    const [logged] = useAuth();

    return (
        <div>
            {logged ? <LoggedinHome /> : <LoggedoutHome />}
        </div>
    );
        
}



export default Home;