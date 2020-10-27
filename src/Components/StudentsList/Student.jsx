import React from "react";

function Student({student}) {
    return (
        <div className="student">
            {`${student.id}. ${student.name}`}
        </div>
    );
}

export default Student;