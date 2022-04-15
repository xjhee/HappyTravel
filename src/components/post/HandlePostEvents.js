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
        }
    }, [formErrors]);

    const validateForm = (values) => {
        const errors = {};
        const ExistingRegions = ['north-america', 'europe', 'asia']
        if (ExistingRegions.indexOf(values.region) <= -1) {
            errors.region = 'Region does not exists'
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