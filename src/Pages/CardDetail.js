import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./CardDetail.module.sass";
import { Link } from "react-router-dom";
import logo from "../assets/rickandmorty.png";

const CardDetail = () => {
    let { id } = useParams();
    let api = `https://rickandmortyapi.com/api/character/${id}`;
    let [fetchedData, updateData] = useState([]);
    let { name, image, location, origin, gender, species, status, type } =
        fetchedData;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            updateData(data);
        })();
    }, [api]);

    return (
        <div>
            <div className="App">
                <header>
                    <Link to="/">
                        <h1>Rick and Morty</h1>
                        <img src={logo} alt="" />
                    </Link>
                </header>
            </div>
            <div className={styles.backButton}>
                <Link to="/">Back</Link>
            </div>
            <div className={styles.container}>
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
                    <p>
                        <span>Location:</span> {location?.name}
                    </p>
                    <p>
                        <span>Origin:</span> {origin?.name}
                    </p>
                    <p>
                        <span>Type:</span> {type === "" ? "Unknown" : type}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardDetail;
