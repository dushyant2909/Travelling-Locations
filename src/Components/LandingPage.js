import React from "react";
import Card from "./Card";
import './LandingPage.css';

function LandingPage(props) {
    const cities = props.cities;

    const allCards = cities.map((city, index) => (
        <Card key={index} cityInfo={city} removeCity = {props.removeCity} />
    ));

    return (
        <div className="outer">
            <div className="all-cards">
                {allCards}
            </div>
        </div>
    );
}

export default LandingPage;
