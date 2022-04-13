import React from 'react';
import '../home/Cards.css';
import CardItem from '../CardItem';
import { useState, useEffect } from "react";
import { GetEventsService } from "../../services/GetEventsService";
import { v4 as uuid } from 'uuid';


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
    useEffect(() => {
        const jsonDataArray = async () => {
            const data = await GetEventsService(props.destination);
            setImages(data);
        }
        jsonDataArray().catch(console.error);
      }, [])

    return (
        <>
            <h2> {props.destination} </h2>
                <ul className='cards__items'>
                    {images.map((image, index) => (
                        <CardItem 
                            key={uuid()}
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

