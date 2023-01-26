import React from "react";
import "./Cards.sass";

const Cards = ({ results }) => {
    let display;
    console.log(results);

    if (results) {
        display = results.map((result) => {
            let { id, name } = result;
            return <div key={id}>{name}</div>;
        });
    } else {
        return (display = "No results found.");
    }

    return <div className="container">{display}</div>;
};

export default Cards;
