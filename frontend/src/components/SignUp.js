import React, {useState} from "react";
import { Button, CloseButton, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit, watch, reset, formState:{errors} } = useForm();
    const submitForm = (data) => {
        console.log(data)
        reset()
    }

    console.log(watch("username"))
    console.log(watch("email"))
    console.log(watch("password"))
    console.log(watch("confirmPassword"))

    return (
        <div className="container">
            <div className="form">
                <h1>Sign Up</h1>
                <form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" {...register("username", {required:true, maxLength:25})}></Form.Control>
                        <br />
                        {errors.username && <span style={{color: "red"}}>Username is required</span>}
                        <br />
                        {errors.username?.type === "maxLength" && <span style={{color: "red"}}>Username is too long</span>}
                    </Form.Group>
                   
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" {...register("email", {required:true, maxLength:80})}></Form.Control>
                        <br />
                        {errors.email && <span style={{color: "red"}}>Email is required</span>}
                        <br />
                        {errors.email?.type === "maxLength" && <span style={{color: "red"}}>Email is too long</span>}
                    </Form.Group>
                
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" {...register("password", {required:true, minLength:8})}></Form.Control>
                        <br />
                        {errors.email && <span style={{color: "red"}}>Email is required</span>}
                        <br />
                        {errors.password?.type === "minLength" && <span style={{color: "red"}}>Min length is 8</span>}
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" {...register("confirmPassword", {required:true, minLength:8})}></Form.Control>
                        <br />
                        {errors.email && <span style={{color: "red"}}>Email is required</span>}
                        <br />
                        {errors.password?.type === "minLength" && <span style={{color: "red"}}>Min length is 8</span>}
                    </Form.Group>
                    
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

