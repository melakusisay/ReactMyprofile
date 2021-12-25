import React, { useState } from 'react';
//import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import Myform from './Myform';
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
            <div>
                <Myform />
                <button onClick={handleSubmit}>sumbmit</button>
            </div>
        )
    }
    export default Login;
