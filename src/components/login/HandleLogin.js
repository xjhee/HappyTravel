import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import { LoginUser } from "../../services/UsersService"
import { useNavigate } from "react-router-dom";


function HandleLogin(props) {
    let navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSumbit] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [formValues, setFormValues] = useState({
        username: "",
        email: "",
        password: ""
    });
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormErrors(validateForm(formValues));
        let jsonData = await LoginUser(formValues);
        setIsSumbit(jsonData);
        if (jsonData == true) {
            setIsAuth(true);
            props.setAuth(true);
            props.setUser(formValues.username)
            navigate("/profile");
        }
        else {
            setIsAuth(false);
            props.setAuth(false);
            navigate("/login/failure");
        }
    };

    useEffect(() => { 
        if (Object.keys(formErrors).length == 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validateForm = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Username is required';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        }
        if (!values.password) {
            errors.password = 'Password is required';
        }
        return errors;
    };

    return (
        <div>
            <LoginForm 
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