import React from 'react';
import '../../App.css';
import Cards from './CardsFromS3';
import Footer from '../Footer';

function RenderNearby(props) {
    return (
        <h3>Check out these EPIC Destinations at {props.destination} </h3>
    )
}
function Nearby() {
    return (
        <>
        <Cards />
        </>
    )
}

export default Nearby;