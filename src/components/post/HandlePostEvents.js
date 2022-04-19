import React, { useEffect, useState } from 'react';
import PostEventForm from './PostEventForm';
import { PostService } from "../../services/PostService"
import S3UploadService from '../../services/S3UploadService';

function HandlePostEvents({userName}) {
    const [formValues, setFormValues] = useState({
        region: "",
        title: "",
        text: "", 
        label: "",
    });
    const [selectedFile, setSelectedFile] = useState();
    const [s3Url, setS3Url] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSumbit] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormValues({...formValues, [name]: value});
    };

    const handleFileChange = (event) => {
        const value = event.target.files[0]
        setSelectedFile(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(validateForm(formValues));
        setIsSumbit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length == 0 && isSubmit) {
            SetTokenS3()
            .then((currentS3Url) => {
                console.log('fetched current s3 url: ', currentS3Url);
                PostService(formValues, userName, currentS3Url);
                console.log('posted events to database: ', currentS3Url)
            })
            .catch((err) => alert(err)) 
            .then((res) => alert('Submit successfully'))   
        } 
        setIsSumbit(false);
        
    }, [formErrors]); 


    const SetTokenS3 = async () => {
        const f = async () => {
            const dataJson = await S3UploadService(selectedFile, formValues.region);
            setS3Url(await dataJson.url);
            return dataJson
        }; 
        let data = await f(); 
        return data
    };

    const validateForm = (values) => {
        const errors = {};
        
        const ExistingRegions = ['north-america', 'europe', 'asia']
        if (!values.region) {
            errors.region = 'Region cannot be empty'
        }
        else if (ExistingRegions.indexOf(values.region) <= -1) {
            errors.region = 'Region does not exists'
        }
        if (!values.title) {
            errors.title = 'Title cannot be empty'
        }
        if (!values.text) {
            errors.text = 'Text cannot be empty'
        }
        if (!values.label) {
            errors.label = 'Label cannot be empty'
        }
        return errors;
    };

    return (
        <div>
            <PostEventForm 
            onSubmit = {handleSubmit}
            onChange = {handleChange}
            onFileChange = {handleFileChange}
            region = {formValues.region}
            title = {formValues.title}
            text = {formValues.text}
            label = {formValues.label}
            file = {formValues.file}
            errors = {formErrors}
            />
        </div>
    );
}

export default HandlePostEvents;