import React from "react";
import Alert from "./Alert"

function NotFoundMessage(props) {
    const eventName = props.eventName;

    return (
    <Alert severity="error">
        {eventName} Not found, please double check your input, or log in as user
    </Alert>
    )

};

export default NotFoundMessage;