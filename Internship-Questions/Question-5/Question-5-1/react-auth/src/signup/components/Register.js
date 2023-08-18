import React, {useState} from "react";
import {Button, Card, Form} from "react-bootstrap";
import axios from "axios";

export default function Register (){
    const[firstname,setFirstname]=useState('');
    const[lastname,setLastname]=useState('');
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');
    const [register, setRegister] = useState(false);

    const handleSubmit = (e) => {

// set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:8080/users",
            data: {
                firstname,
                lastname,
                username,
                email,
                password,
            },
        };
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text
        // alert("Submitted");
        // make the API call
        axios(configuration)
            .then((result) => {
                setRegister(true);
            })
            .catch((error) => {
                error = new Error();
            });
    }

    return(

        <>
            <Card className="register-container">
                <Card.Body>
                    <h2>Register</h2>
                    <Form onSubmit={(e)=>handleSubmit(e)}>

                        {/* display success message */}
                        {register ? (
                            <p className="text-success">You Are Registered Successfully</p>
                        ) : (
                            <p className="text-danger">You Are Not Registered</p>
                        )}
                        {/*Firstname*/}
                        <Form.Group controlId="formBasicFirstname">
                            <Form.Label>Firstname</Form.Label>
                            <Form.Control type="text" name="firstname" value={firstname}  onChange={(e) => setFirstname(e.target.value)} placeholder="Enter Firstname" />
                        </Form.Group>
                        {/*Lastname*/}
                        <Form.Group controlId="formBasicFirstname">
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control type="text" name="lastname" value={lastname}  onChange={(e) => setLastname(e.target.value)} placeholder="Enter Lastname" />
                        </Form.Group>
                        {/*Username*/}
                        <Form.Group controlId="formBasicFirstname">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username" value={username}    onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" />
                        </Form.Group>
                        {/* email */}
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                        </Form.Group>

                        {/* password */}
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        </Form.Group>

                        {/*Confirm Password*/}
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name='confirmPassword' value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                        </Form.Group>

                        {/* submit button */}
                        <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
           </>
    )

}