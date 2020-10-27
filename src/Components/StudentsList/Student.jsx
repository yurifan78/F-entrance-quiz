import React from "react";
import './Student.css';

function Student({student}) {
    return (
        <div className="student">
            {`${student.id}. ${student.name}`}
        </div>
    );
}

export default Student;