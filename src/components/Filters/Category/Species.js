import React from "react";

const Species = ({
    setPageNumber,
    setSpecies,
    speciesState,
    setSpeciesState,
}) => {
    let species = [
        "Alien",
        "Animal",
        "Cronenberg",
        "Disease",
        "Human",
        "Humanoid",
        "Mythological Creature",
        "Poopybutthole",
        "Robot",
        "unknown",
    ];

    return (
        <div>
            <select
                name="species"
                id="species"
                onChange={(e) => {
                    setPageNumber(1);
                    setSpecies(e.target.value);
                    setSpeciesState(e.target.value);
                }}
                value={speciesState}
            >
                <option value="" disabled>
                    Filter by species
                </option>
                {species.map((item, index) => (
                    <option value={item} key={index}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Species;
