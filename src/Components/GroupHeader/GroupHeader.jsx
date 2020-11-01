import React from "react";
import GroupingButton from "./GroupingButton/GroupingButton";
// TODO GTB-知识点: - 语法错误，找不到GroupHeader.css这个文件
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