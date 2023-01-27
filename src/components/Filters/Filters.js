import React from "react";
import Species from "./Category/Species";
import Status from "./Category/Status";
import Gender from "./Category/Gender";

const Filters = ({ setSpecies, setStatus, setGender, setPageNumber }) => {
    return (
        <div>
            <div>Filter</div>
            <div>Clear Filters</div>
            <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
            <Status setPageNumber={setPageNumber} setStatus={setStatus} />
            <Gender setPageNumber={setPageNumber} setGender={setGender} />
        </div>
    );
};

export default Filters;
