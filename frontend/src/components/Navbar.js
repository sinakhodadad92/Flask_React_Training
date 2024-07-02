import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth, logout } from '../auth';

const LoggedInLinks = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page"  to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/create_recipe">Create Recipe</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="#" onClick={()=>{logout()}}>Logout</a>
            </li>   
        </>
    );
}

const LoggedOutLinks = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page"  to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/login">Login</Link>
            </li>
        </>
    );
}

const NavBar = () => {
    const [logged] = useAuth();
    console.log(logged);
    
    return (
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Recipes</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {logged ? <LoggedInLinks /> : <LoggedOutLinks />}
                </ul>
                </div>
            </div>
        </nav>
    );
}



// Export NavBar as the default export
export default NavBar;
