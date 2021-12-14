import React from "react";

const Item = ({ name, number }) => {
    return <li>
        <span>{name}</span>
        <span>{number}</span>
        </li>
 }

export default Item;