import React from 'react';
import Footer from '../Footer';
import FailureMessage from '../message/FailureMessage';
import SuccessMessage from '../message/SuccessMessage';
import HandleLogin from './HandleLogin';
import './LoginForm.css';
import {
    Routes,
    Route
  } from "react-router-dom";

function Login() {
    return (
        <>
        <HandleLogin />
        <Routes>
            <Route path="/success" exact element={<SuccessMessage eventName='Login'/>} />
            <Route path="/failure" exact element={<FailureMessage eventName='Login'/>} />
        </Routes>
        <Footer />
        </>
    )
    
};


export default Login;