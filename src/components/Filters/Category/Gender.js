import React from "react";

const Gender = ({ setPageNumber, setGender, genderState, setGenderState }) => {
    return (
        <div>
            <select
                name="gender"
                id="gender"
                onChange={(e) => {
                    setPageNumber(1);
                    setGender(e.target.value);
                    setGenderState(e.target.value);
                }}
                value={genderState}
            >
                <option value="" disabled>
                    Filter by gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        </div>
    );
};

export default Gender;
