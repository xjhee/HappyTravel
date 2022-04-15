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

function Login(props) {
    return (
        <>
        <HandleLogin setAuth = {props.setAuth} setUser = {props.setUser}/>
        <Routes>
            {!props.auth && (
                <Route path="/success" exact element={<SuccessMessage eventName='Login'/>} />
            )}
            {props.auth && (
                <Route path="/failure" exact element={<FailureMessage eventName='Login'/>} />
            )}
        </Routes>
        <Footer />
        </>
    )
    
};


export default Login;