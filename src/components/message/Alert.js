import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import "./Alert.css"

function Alert(props) {
    return <MuiAlert className="alert-container" elevation={6} 
                     variant="filled" {...props} />;
  }

export default Alert;