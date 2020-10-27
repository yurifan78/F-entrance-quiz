import React from "react";
import './GroupingButton.css';

function GroupingButton() {
    const groupingStudentsHandler = () => {

    }

    return (
        <div>
            <button onClick={groupingStudentsHandler} type="submit" className="grouping-button">分组学员</button>
        </div>
    );
}

export default GroupingButton;