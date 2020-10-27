import React from "react";
import Group from "./Group";

function Groups({ students }) {
    return (
        <div className="groups">
            <Group id="1" students={students}/>
            <Group id="2" students={students}/>
            <Group id="3" students={students}/>
            <Group id="4" students={students}/>
            <Group id="5" students={students}/>
            <Group id="6" students={students}/>
        </div>
    );
}

export default Groups;