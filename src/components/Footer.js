import React from 'react';
import './Footer.css';

function Footer () {

    return (
        <div className='main-footer'>
            <div className='footer-middle'>
                <div className='footer-container'>
                    <div className='footer-row' style={{ display: 'flex' }}>
                        <div className='footer-column'>
                            <h4> BTS INC</h4>
                            <ul className='list-unstyled'>
                                <li>About Us</li>
                                <li>Newsroom</li>
                                <li>Products</li>
                            </ul>
                        </div>
                        <div className='footer-column'>
                            <h4>Support</h4>
                            <ul className='list-unstyled'>
                                <li>Help Center1</li>
                                <li>Help Center2</li>
                                <li>Help Center3</li>
                            </ul>
                        </div>
                        <div className='footer-column'>
                            <h4>Connect</h4>
                            <ul className='list-unstyled'>
                                <li>Blog</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-row'>
                        <p className='footer-column-sm'>
                        &copy;{new Date().getFullYear()} BTS | All rights reserved |
            Terms Of Service | Privacy
                        </p>
                    </div>
                </div>
            </div>
        </div>

    
    );
}

export default Footer;

