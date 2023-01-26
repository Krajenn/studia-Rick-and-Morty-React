import React from "react";
import "./Cards.sass";

const Cards = ({ results }) => {
    let display;
    console.log(results);

    if (results) {
        display = results.map((result) => {
            let { id, name, species, status, gender, image } = result;
            return (
                <div key={id} className="card">
                    <div className="imgContainer">
                        <img src={image} alt={name} />
                    </div>
                    <div className="infoContainer">
                        <h3>{name}</h3>
                        <p>Species: {species}</p>
                        <p>Status: {status}</p>
                        <p>Gender: {gender}</p>
                    </div>
                </div>
            );
        });
    } else {
        return (display = "No results found.");
    }

    return <div className="container">{display}</div>;
};

export default Cards;
