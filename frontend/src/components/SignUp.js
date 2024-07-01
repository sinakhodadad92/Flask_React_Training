import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const submitForm = () => {
        console.log("Form submitted")
        console.log(username)
        console.log(email)
        console.log(password)
        console.log(confirmPassword)
        
        setEmail("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
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
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} name="email" onChange={(e) => {setEmail(e.target.value)}}/>
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} name="password" onChange={(e) => {setPassword(e.target.value)}}/>
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" value={confirmPassword} name="confirmPassword" onChange={(e) => {setConfirmPassword(e.target.value)}}/>
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Button as="sub" variant="primary" type="submit" onClick={submitForm}>Sign Up</Button>
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <small>Already have an account? <Link to="/login">Login</Link></small>
                    </Form.Group>
                </form>
            </div>
        </div>
    );
}

export default SignUp;

