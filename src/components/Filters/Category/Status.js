import React from "react";

const Status = ({ setStatus, setPageNumber, statusState, setStatusState }) => {
    return (
        <div>
            <select
                name="status"
                id="status"
                onChange={(e) => {
                    setPageNumber(1);
                    setStatus(e.target.value);
                    setStatusState(e.target.value);
                }}
                value={statusState}
            >
                <option value="" disabled>
                    Filer by status
                </option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">unknown</option>
            </select>
        </div>
    );
};

export default Status;
