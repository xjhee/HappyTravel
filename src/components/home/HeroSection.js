import React from 'react';
import { Button } from './Button'
import './HeroSection.css' 

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <p>Welcome to BTS! </p>
            <br></br>
            <p>We build space for people who want to find friends to travel with </p>
            <br></br>
            <p>Checkout exclusive travel plans nearby!</p>
            <br></br>
            <div>
                <Button 
                className='hero-btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                to='signup'
                >
                    Get Started
                </Button>
                <Button 
                className='hero-btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                to=''
                >
                    Play again <i className='far fa-play-circle' />
                </Button>

            </div>

        </div>
    );
}

export default HeroSection;