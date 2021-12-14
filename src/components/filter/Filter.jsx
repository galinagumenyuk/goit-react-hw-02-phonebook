import React from "react";

const Filter = ({ value, onChange}) => {
    return (
        <div>
        <p>Find contacts by name</p>
        <input type="text" value={value} onChange={onChange}></input>
        </div>
    )
}

export default Filter;