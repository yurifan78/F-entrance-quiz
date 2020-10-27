import React from "react";
import GroupingButton from "./GroupingButton";
import './GroupHeader.css'


function GroupHeader() {

    return (
        <div className="group-header">
            <div className="grouping-title">分组列表</div>
            <GroupingButton />
        </div>
    );
}

export default GroupHeader;