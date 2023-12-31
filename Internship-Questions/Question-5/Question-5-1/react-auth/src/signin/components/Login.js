import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
export default function Login (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [login, setLogin] = useState(false);
    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text
        alert("Submitted");
    }
    return(
        <>
            <h2>Login</h2>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                {/* email */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>

                {/* submit button */}
                <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                    Submit
                </Button>
            </Form></>
    )

}