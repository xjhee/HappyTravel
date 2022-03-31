import React, { useState, useEffect } from "react";
import SignUpForm2 from "./SignUpForm";



function HandleLogin() {

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
            console.log(formValues);
        }
    }, [formErrors]);


    const validateForm = (values) => {
        //TODO
    };


    return (
        <div>
            <SignUpForm2 
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



export default HandleLogin;