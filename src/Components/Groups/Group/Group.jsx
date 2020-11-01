import React from "react";
import './Group.css';

// TODO GTB-知识点: - 从设计上来说，每一个Group应该包含组名以及这个组的学员信息
function Group({ id }) {
    return (
        <div className="group">
            <div className="group-number">{id}组</div>
        </div>
    );
}

export default Group;