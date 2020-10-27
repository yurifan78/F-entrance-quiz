import React from "react";
import './Group.css';

function Group({ id }) {
    return (
        <div className="group">
            <div className="group-number">{id}组</div>
        </div>
    );
}

export default Group;