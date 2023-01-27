import "./App.sass";
import React, { useState, useEffect } from "react";
import logo from "./assets/rickandmorty.png";
import Search from "./components/Search/Search";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from "./components/Pagination/Pagination";
import CardDetail from "./Pages/CardDetail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/character/:id" element={<CardDetail />} />
            </Routes>
        </Router>
    );
}

const Home = () => {
    let [pageNumber, setPageNumber] = useState(1);
    let [search, setSearch] = useState("");
    let [species, setSpecies] = useState("");
    let [status, setStatus] = useState("");
    let [gender, setGender] = useState("");
    let [value, setValue] = useState("");
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
        <div className="Home">
            <div className="App">
                <header
                    onClick={() => {
                        setPageNumber(1);
                    }}
                >
                    <Link to="/">
                        <h1>Rick and Morty</h1>
                        <img src={logo} alt="" />
                    </Link>
                </header>
            </div>
            <div className="main">
                <Search
                    setSearch={setSearch}
                    setPageNumber={setPageNumber}
                    value={value}
                    setValue={setValue}
                />
                <Filters
                    setSpecies={setSpecies}
                    setStatus={setStatus}
                    setGender={setGender}
                    setPageNumber={setPageNumber}
                    setSearch={setSearch}
                    setValue={setValue}
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
};

export default App;
