import React, { useEffect, useState } from 'react';
import PostEventForm from './PostEventForm';
import { PostService } from "../../services/PostService"

function HandlePostEvents({userName}) {
    const [formValues, setFormValues] = useState({
        region: "",
        text: "", 
        label: "",
        image: "",
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
            PostService(formValues, userName);
            alert('Submit successfully');
        }
    }, [formErrors]);

    const validateForm = (values) => {
        const errors = {};
        const ExistingRegions = ['north-america', 'europe', 'asia']
        if (!values.region) {
            errors.region = 'Region cannot be empty'
        }
        else if (ExistingRegions.indexOf(values.region) <= -1) {
            errors.region = 'Region does not exists'
        }
        if (!values.text) {
            errors.text = 'Text cannot be empty'
        }
        if (!values.label) {
            errors.label = 'Label cannot be empty'
        }
        if (!values.image) {
            errors.image = 'Image cannot be empty'
        }
        return errors;
    };

    return (
        <div>
            <PostEventForm 
            onSubmit = {handleSubmit}
            onChange = {handleChange}
            region = {formValues.region}
            text = {formValues.text}
            label = {formValues.label}
            image = {formValues.image}
            errors = {formErrors}
            />
        </div>
    );
}

export default HandlePostEvents;