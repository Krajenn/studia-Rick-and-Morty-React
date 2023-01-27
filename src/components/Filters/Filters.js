import React, { useState } from "react";
import Species from "./Category/Species";
import Status from "./Category/Status";
import Gender from "./Category/Gender";
import style from "./Filters.module.sass";

const Filters = ({
    setSpecies,
    setStatus,
    setGender,
    setPageNumber,
    setSearch,
    setValue,
}) => {
    let [speciesState, setSpeciesState] = useState("");
    let [statusState, setStatusState] = useState("");
    let [genderState, setGenderState] = useState("");

    return (
        <div className={style.container}>
            <div className={style.filter}>Filters</div>
            <div
                className={style.clear}
                onClick={() => {
                    setSpecies("");
                    setStatus("");
                    setGender("");
                    setPageNumber(1);
                    setSpeciesState("");
                    setStatusState("");
                    setGenderState("");
                    setSearch("");
                    setValue("");
                }}
            >
                Clear Filters
            </div>
            <Species
                setPageNumber={setPageNumber}
                setSpecies={setSpecies}
                speciesState={speciesState}
                setSpeciesState={setSpeciesState}
            />
            <Status
                setPageNumber={setPageNumber}
                setStatus={setStatus}
                statusState={statusState}
                setStatusState={setStatusState}
            />
            <Gender
                setPageNumber={setPageNumber}
                setGender={setGender}
                genderState={genderState}
                setGenderState={setGenderState}
            />
        </div>
    );
};

export default Filters;
