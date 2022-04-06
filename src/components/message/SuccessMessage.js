import React from "react";
import Alert from "./Alert"

function SuccessMessage(props) {
    const eventName = props.eventName;
    return (
    <Alert severity="success">
        {eventName} Succeed
    </Alert>
    )

};

export default SuccessMessage;