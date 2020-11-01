import React from "react";
import Group from "./Group/Group";

function Groups({ students }) {
    return (
        <div className="groups">
            {/* // TODO GTB-知识点: -  分组应该由后台的API完成，而不是在前端写死6个组 */}
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