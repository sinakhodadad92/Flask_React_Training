import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { register, handleSubmit, watch, formState:{errors} } = useForm();

    const submitForm = () => {
        console.log("User Logged in")
        console.log(username)
        console.log(password)

        setUsername("");
        setPassword("");
    }

    return (
        <div className="container">
            <div className="form">
                <h1>Sign Up</h1>
                <form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" value={username} name="username" onChange={(e) => {setUsername(e.target.value)}}/>
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} name="password" onChange={(e) => {setPassword(e.target.value)}}/>
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Button as="sub" variant="primary" type="submit" onClick={submitForm}>Sign in</Button>
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
