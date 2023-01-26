import "./App.sass";
import React, { useState, useEffect } from "react";
import logo from "./assets/rickandmorty.png";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";

function App() {
    let [pageNumber, setPageNumber] = useState(1);
    let [fatchedData, updateData] = useState([]);
    let { info, results } = fatchedData;

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            updateData(data);
        })();
    }, [api]);

    return (
        <div className="App">
            <header>
                <h1>Rick and Morty</h1>
                <img src={logo} alt="" />
            </header>
            <div className="main">
                <Filters />
                <Cards results={results} />
            </div>
        </div>
    );
}

export default App;
