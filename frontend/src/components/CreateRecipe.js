import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CreateRecipe = () => {

    const { register, handleSubmit, reset, formState:{errors} } = useForm();

    const createRecipe = (data) => {

        const token = localStorage.getItem("REACT_TOKEN_AUTH_KEY");
        
        const requestOptions = {
            method: "POST",
            headers: { 
                "content-type": "application/json",
                "Authorization": `Bearer ${JSON.parse(token)}`

            },
            body: JSON.stringify(data)
        }

        fetch("/api/recipes", requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        }).catch(error => {
            console.error("There was an error", error);
        });
    }

    return (
        <div className="container">
            <h1>Create a Recipe</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" {...register("title", { required: true, maxLength: 25 })} />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Enter description" {...register("description", { required: true, maxLength: 100 })} />
                </Form.Group>
                {errors.title && <p style={{color: "red"}}><small>Title is required!</small></p>}
                {errors.title?.type === "maxLength" && <p style={{color: "red"}}><small>Title cannot exceed 25 characters</small></p>}
                <br />
                <Button variant="primary" type="submit" onClick={handleSubmit(createRecipe)}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default CreateRecipe;
