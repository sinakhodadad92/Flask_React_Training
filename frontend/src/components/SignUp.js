import React, {useState} from "react";
import { Button, CloseButton, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit, watch, reset, formState:{errors} } = useForm();
    const submitForm = (data) => {
        console.log(data)
        if (data.password === data.confirmPassword) {
            const body = {
                username: data.username,
                email: data.email,
                password: data.password
            }
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body) // original data is always a object
            }
            fetch("/api/auth/signup", requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .catch(error => {
                    console.error("There was an error", error)
                })
            reset()
        }
        else {
            alert("Passwords do not match")
        }
    }

    return (
        <div className="container">
            <div className="form">
                <h1>Sign Up</h1>
                <form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" {...register("username", { required: true, maxLength: 25 })} />
                        {errors.username && <p style={{ color: "red" }}><small>{errors.username.type === "required" ? "Username is required" : "Username cannot exceed 25 characters"}</small></p>}
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true, maxLength: 80 })} />
                        {errors.email && <p style={{ color: "red" }}><small>{errors.email.type === "required" ? "Email is required" : "Email cannot exceed 80 characters"}</small></p>}
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" {...register("password", { required: true, minLength: 8 })} />
                        {errors.password && <p style={{ color: "red" }}><small>{errors.password.type === "required" ? "Password is required" : "Password must be at least 8 characters long"}</small></p>}
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" {...register("confirmPassword", { required: true, minLength: 8 })} />
                        {errors.confirmPassword && <p style={{ color: "red" }}><small>{errors.confirmPassword.type === "required" ? "Confirmation is required" : "Confirm password must match and be at least 8 characters long"}</small></p>}
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Button as="sub" variant="primary" type="submit" onClick={handleSubmit(submitForm)}>Sign Up</Button>
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