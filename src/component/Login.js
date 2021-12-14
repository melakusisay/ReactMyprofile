import React, { useState } from 'react';
//import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
 
    export const Login = (props) => { 
        const [submitting, setSubmitting] = useState(false);
        const handleSubmit = event => {
            event.preventDefault();
            setSubmitting(true);

             setTimeout(() => {
            setSubmitting(false);
             }, 3000)
             alert('You have submitted the form.')
          }           
        return (
            <div style= {{  border: '4px solid black', width:600, height:600, marginLeft: "14rem", marginTop:"8rem" }} >         
                       Melaku
           <h1>Please Enter Your email and Passward</h1>
                {submitting &&
                <div>Submtting Form...</div>
                 }
                 
        <Form onSubmit={handleSubmit}>
        
            <Form.Group className="mb-3" controlId="formBasicEmail">  
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">  
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            
            <Button variant="primary" type="submit" >Submit</Button>
        </Form>

        {props.logs.map(tolog => (
          <h4 key={tolog.id}>
             {tolog.name}  
          </h4>           
          ))}

            </div>
        )
    }
    export default Login;
