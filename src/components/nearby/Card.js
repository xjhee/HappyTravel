import React from 'react';
import { useState, useEffect } from "react";
import { GetEventByIdService } from '../../services/GetEventsService';


function Card(props) {
    const [event, setEvents] = useState({});
    const SetCard = async (id) => {
        const dataJson = await GetEventByIdService(id);
        return dataJson
    }; 

    useEffect(() => {
        SetCard(props.id)
        .then((res) => {
            setEvents(res); 
        })
        .catch((err) => alert(err)) 
      }, []);
    return ( 
        <>
        <div>
            <ul>
                <h4>{event.text}</h4>
            </ul>    
        </div>
        </>
    )
}

export default Card;