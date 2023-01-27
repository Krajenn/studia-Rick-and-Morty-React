import "./App.sass";
import React, { useState, useEffect } from "react";
import logo from "./assets/rickandmorty.png";
import Search from "./components/Search/Search";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from "./components/Pagination/Pagination";

function App() {
    let [pageNumber, setPageNumber] = useState(1);
    let [search, setSearch] = useState("");
    let [species, setSpecies] = useState("");
    let [status, setStatus] = useState("");
    let [gender, setGender] = useState("");
    let [fatchedData, updateData] = useState([]);
    let { info, results } = fatchedData;

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&species=${species}&status=${status}&gender=${gender}`;

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
                <Search setSearch={setSearch} setPageNumber={setPageNumber} />
                <Filters
                    setSpecies={setSpecies}
                    setStatus={setStatus}
                    setGender={setGender}
                    setPageNumber={setPageNumber}
                />
                <Cards results={results} />
                <Pagination
                    info={info}
                    setPageNumber={setPageNumber}
                    pageNumber={pageNumber}
                />
            </div>
        </div>
    );
}

export default App;
