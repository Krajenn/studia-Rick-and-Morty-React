import React from "react";
import style from "./Search.module.sass";

const Search = ({ setSearch, setPageNumber }) => {
    return (
        <form className={style.container}>
            <input
                onChange={(e) => {
                    setPageNumber(1);
                    setSearch(e.target.value);
                }}
                type="text"
                placeholder="Search characters"
            />
            <button onClick={(e) => e.preventDefault()}>Search</button>
        </form>
    );
};

export default Search;
