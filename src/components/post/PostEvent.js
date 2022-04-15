import React from 'react';
import './PostEventForm.css';
import HandlePostEvents from './HandlePostEvents';

function PostEvent({userName}) {
    return (
        <>
        <HandlePostEvents userName={userName} />
        </>
    )
};


export default PostEvent;