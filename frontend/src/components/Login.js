import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const {register, handleSubmit, reset, formState:{errors}} = useForm();

    const navigate = useNavigate();

    const loginUser = (data) => {
        console.log(data);
        
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }

        fetch("/api/auth/login", requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data.access_token);
            login(data.access_token);
            navigate("/");
        })

        reset();
    }


    return (
        <div className="container">
            <div className="form">
                <h1>Sign Up</h1>
                <form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" {...register('username', {required:true, maxLength:25})}/>
                    </Form.Group>
                    {errors.username && <p style={{color: "red"}}><small>Username is required!</small></p>}
                    {errors.username?.type === "maxLength" && <p style={{color: "red"}}><small>Username cannot exceed 25 characters</small></p>}
                    <br />
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" {...register('password', {required:true, minLength:8})}/>
                    </Form.Group>
                    {errors.password && <p style={{color: "red"}}><small>Password is required!</small></p>}
                    {errors.password?.type === "minLength" && <p style={{color: "red"}}><small>Password must be at least 8 characters long</small></p>}
                    <br />
                    <Form.Group>
                        <Button as="sub" variant="primary" type="submit" onClick={handleSubmit(loginUser)}>Sign in</Button>
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <small>Don't have an account? <Link to="/signup">Sign up</Link></small>
                    </Form.Group>
                </form>
            </div>
        </div>
    );
}

export default Login;
