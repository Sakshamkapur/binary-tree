import React from "react";

const Node = ({ value, isActive, handleClick }) => (
    <div className={`${isActive ? "node active": "node"}`} onClick={handleClick}>{value}</div>
)

export default Node;