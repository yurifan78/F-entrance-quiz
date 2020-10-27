import React from "react";
import Student from "./Student";

function StudentsList({students}) {
    return (
        <div className="students-list">
            {students.map(student => (
                <Student student={student}/>
            ))}
        </div>
    );
}

export default StudentsList;