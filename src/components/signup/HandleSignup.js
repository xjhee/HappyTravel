import React, { useState, useEffect } from "react";
import SignUpForm from "./SignUpForm";
import { SignUpUser } from "../../services/SignupService"


function HandleSignup() {

    const [formValues, setFormValues] = useState({
        username: "",
        email: "",
        password: "",
      });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSumbit] = useState(false);
      
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(validateForm(formValues));
        setIsSumbit(true);

    };

    useEffect(() => { 
        if (Object.keys(formErrors).length == 0 && isSubmit) {
            SignUpUser(formValues);
            console.log(formValues);
        }
    }, [formErrors]);


    const validateForm = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = 'Username is required';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        }
        else if (!regex.test(values.email)) {
            errors.email = 'This is not a valid email format'
        }
        if (!values.password) {
            errors.password = 'Password is required';
        }
        else if (values.password.length < 4) {
            errors.password = 'Password must be more than 4 characters'
        }
        else if (values.password.length > 10) {
            errors.password = 'Password must be less than 10 characters'
        }
        return errors;
    };


    return (
        <div>
            <SignUpForm 
            onSubmit = {handleSubmit}
            onChange = {handleChange}
            username = {formValues.username}
            email = {formValues.email}
            password = {formValues.password}
            errors = {formErrors}
            />

        </div>
    );

}



export default HandleSignup;