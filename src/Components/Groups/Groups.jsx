import React from "react";
import Group from "./Group";

function Groups({ students }) {
    return (
        <div className="groups">
            <Group students={students}/>
        </div>
    );
}

export default Groups;