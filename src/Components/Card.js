import React, { useState } from "react";
import './Card.css';

function Card(props) {

    const [clickReadMore, setReadMore] = useState(true);

    function removeHandler(id)
    {
        props.removeCity(id);
    }

    function clickHandler(eventName) {
        if (eventName === "readmore")
            setReadMore(false);
        else
            setReadMore(true);
    }

    const { id,image, info, name, price } = props.cityInfo;
    const shortDesctiption = `${info.substring(0, 130)}.... `;

    return (
        <div className="card">
            <img className="card-img-top card-image" src={image} alt="Taj Mahal"></img>
            <div className="card-body">
                <h5 className="amount card-title">&#8377; {price}</h5>
                <h4 className="city-name card-title">{name}</h4>
                <p className="card-text">{clickReadMore ? (<>{shortDesctiption} <span className="read-more" onClick={() => clickHandler("readmore")} >Read more</span></>) : (<>{info} <span className="read-more" onClick={() => clickHandler("showless")} > Show Less</span></>)}</p>
            </div>
            <div className="button-box"><button className="not-interested" onClick={()=>removeHandler(id)}>Not Interested</button></div>
        </div>
    )
}

export default Card;