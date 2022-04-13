import React, { useContext } from 'react';
import AuthApi from '../../AuthApi';
import Cookies from 'js-cookie';
import { Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

function LogOut(props) {
    let navigate = useNavigate();
    const Auth = useContext(AuthApi)
    const handleOnClick = () => {
        Auth.setAuthCookie(false);
        Cookies.remove(props.userName);
        navigate("/signup");
    }
    return (
        <div>
            <Button 
                onClick={handleOnClick}
                style={{
                    fontSize: '20px', 
                    margin: '50px 30px'}}> 
            Click to log out 
            </Button>
        </div>
    )
    
};


export default LogOut;