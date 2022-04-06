import React, { useState } from 'react';
import HandleSignup from './HandleSignup';
import Footer from '../Footer';
import './SignupForm.css';
import FailureMessage from '../message/FailureMessage';
import SuccessMessage from '../message/SuccessMessage';
import {
    Routes,
    Route
  } from "react-router-dom";
  
function Signup() {
    return (
        <>
        <HandleSignup />
        <Routes>
            <Route path="/success" exact element={<SuccessMessage eventName='Signup'/>} />
            <Route path="/failure" exact element={<FailureMessage eventName='Signup'/>} />
        </Routes>
        <Footer />
        </>
    )
    
};


export default Signup;