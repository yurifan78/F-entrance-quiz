import React from "react";
import GroupingButton from "./GroupingButton/GroupingButton";
import './GroupHeader.css'


function GroupHeader({students}) {
    return (
        <div className="group-header">
            <div className="grouping-title">分组列表</div>
            <GroupingButton students={students} />
        </div>
    );
}

export default GroupHeader;