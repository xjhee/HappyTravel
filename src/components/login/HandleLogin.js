import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import { LoginUser } from "../../services/UsersService"
import { useNavigate } from "react-router-dom";
import { object } from "prop-types";
import Cookies from 'js-cookie'

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
        props.setUser(formValues.username)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormErrors(validateForm(formValues));
        let jsonData = await LoginUser(formValues);
        setIsSumbit(jsonData);
        console.log(jsonData)
        if (jsonData == true) {
            setIsAuth(true);
            props.setAuth(true);
            Cookies.set(formValues.username, "loginTrue");
            navigate("/");
            window.location.reload();
        }
        else {
            setIsAuth(false);
            props.setAuth(false);
            navigate("/login/failure");
        }
    };

    useEffect(() => { 
        localStorage.setItem("user", formValues.username)
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