import React from "react";
import styles from "./Cards.module.sass";
import { Link } from "react-router-dom";

const Cards = ({ results }) => {
    let display;

    if (results) {
        display = results.map((result) => {
            let { id, name, species, status, gender, image } = result;
            return (
                <div key={id} className={styles.card}>
                    <Link to={`/character/${id}`}>
                        <div className={styles.imgContainer}>
                            <img src={image} alt={name} />
                        </div>
                        <div className={styles.infoContainer}>
                            <h3>{name}</h3>
                            <p>
                                <span>Species:</span> {species}
                            </p>
                            <p>
                                <span>Status:</span> {status}
                            </p>
                            <p>
                                <span>Gender:</span> {gender}
                            </p>
                        </div>
                    </Link>
                </div>
            );
        });
    } else {
        return (display = "No results found.");
    }

    return <div className={styles.container}>{display}</div>;
};

export default Cards;
