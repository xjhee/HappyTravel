import React from 'react';
import '../home/Cards.css';
import CardItem from '../CardItem';
import { useState } from "react";

/*
Depreciated version: read image from postgres db
*/

function Cards() {
    const city = ['asia', 'europe', 'north-america']
    return (
        <div className='cards'>
                {city.map((s) => <RenderNearby destination={s} />)}
            <div className='cards__container'>
                <div className='cards__wrapper'>
                </div>
            </div>
            </div>
  );
}

function RenderNearby(props) {
    var images;
    if (props.destination == 'asia') {
        const images_asia = importAll(require.context('../../images/asia', false));
        images = images_asia
    } 
    else if (props.destination == 'europe') {
        const images_europe = importAll(require.context('../../images/europe', false));
        images = images_europe
    } 
    else {
        const images_north_america = importAll(require.context('../../images/north-america', false));
        images = images_north_america
    }

    return (
        <>
            <h2> {props.destination} </h2>
                <ul className='cards__items'>
                    {images.map((image, index) => (
                        <CardItem 
                            src={image} path='/sign-up' 
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    ))}
                </ul>
                <br/>
                <br/>
        </>
    
    );
}

function importAll(r) {
    return r.keys().map(r);
}
  



export default Cards;