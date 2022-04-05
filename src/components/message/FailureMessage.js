import React from "react";
import Alert from "./Alert"

function FailureMessage() {
    return (
    <Alert severity="error">
        Login Failed
    </Alert>
    )

};

export default FailureMessage;