import React from 'react';

import './card.styles.css'


export const Card = (props) => {
    return(
    <div className='card-container'>
        <img src={`https://robohash.org/${props.biodata.id}?set=set2&size=180x180`} alt="biodata"/>
        <h5>{props.biodata.name}</h5>
        <p>{props.biodata.email}</p>
    </div>
)
}