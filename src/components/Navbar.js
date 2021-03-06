import { Button } from './home/Button'
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Navbar.css'; 


function Navbar(props) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click); //reverse click to false-true
    const closeMobileMeuu = () => setClick(false);
    
    const [button, setButton] = useState(true);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);
   

    window.addEventListener('resize', showButton);
    if (props.auth == false) {
        return (
            <>
                <nav className="navbar">
                    <div className="navbar-container">
                        <Link to="/" className="fab fa-typo3" >
                            BTS <i className="fab fa-typo3" />
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? "fas fa-times":  "fas fa-bars"} />
                        </div>
                        <ul className={click ? 'nav-menu active': "nav-menu"}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMeuu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/nearby" className="nav-links" onClick={closeMobileMeuu}>
                                    Nearby
                                </Link>
                            </li>
                        </ul>
                        {button && <Button buttonStyle='btn-outline' to='login'> Log In </Button>}
    
    
                    </div>
                </nav>
    
            </>
        );
    }
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="fab fa-typo3" >
                        BTS <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times":  "fas fa-bars"} />
                    </div>
                    <ul className={click ? 'nav-menu active': "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMeuu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/nearby" className="nav-links" onClick={closeMobileMeuu}>
                                Nearby
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-links" onClick={closeMobileMeuu}>
                                Profile
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn-outline' to='logout'> Log out </Button>}


                </div>
            </nav>

        </>
    )
    
}



export default Navbar;