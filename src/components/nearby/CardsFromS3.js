import React from 'react';
import '../home/Cards.css';
import CardItem from '../CardItem';
import { useState } from "react";
import GetEventsService from "../../services/GetEventsService"

/*
Temp file: 
TODO: store images in S3 bucket, and read from there 
Need to go to amazon service and configure a bit...
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
    const [images, setImages] = useState([]);

    const handleImages = async (destination) => {
        let jsonDataArray = await GetEventsService(destination);
        setImages(jsonDataArray);
    };
    handleImages(props.destination);
    return (
        <>
            <h2> {props.destination} </h2>
                <ul className='cards__items'>
                    {images.map((image, index) => (
                        <CardItem 
                            src={image.image}
                            path={image.label}
                            label={image.label}
                            text={image.text}
                        />
                    ))}
                </ul>
                <br/>
                <br/>
        </>
    
    );
}

export default Cards;

