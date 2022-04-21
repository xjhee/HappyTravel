import React from 'react';
import '../../App.css';
import Card from './Card';
import Cards from './CardsFromS3';
import { useParams } from 'react-router-dom';
import {
    Routes,
    Route
  } from "react-router-dom";


function Nearby() {
    return (
        <>
        <Routes>
            <Route path="/" exact element={< Cards/>}/>
            <Route path="/:id" exact element={< DisplayEventText/>}/>
        </Routes>
        </>
    )
};

function DisplayEventText() {
    let { id } = useParams();
    return (
        <>
        <h2> Event information as below:</h2>
        <br />
            <div>
                <Card id={id}/>
            </div>
        </>
    )
};


export default Nearby;