import React from "react";
import styles from "./Cards.module.sass";

const Cards = ({ results }) => {
    let display;

    if (results) {
        display = results.map((result) => {
            let { id, name, species, status, gender, image } = result;
            return (
                <div key={id} className={styles.card}>
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
                </div>
            );
        });
    } else {
        return (display = "No results found.");
    }

    return <div className={styles.container}>{display}</div>;
};

export default Cards;
