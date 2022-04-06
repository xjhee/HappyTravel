import React from "react";
import Alert from "./Alert"

function FailureMessage(props) {
    const eventName = props.eventName;

    return (
    <Alert severity="error">
        {eventName} Failed
    </Alert>
    )

};

export default FailureMessage;