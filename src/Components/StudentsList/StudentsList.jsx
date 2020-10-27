import React from "react";
import Student from "./Student/Student";
import './StudentsList.css';

function StudentsList({students}) {
    return (
        <div className="students-list">
            <div className="students-list-title">学员列表</div>
            <div className="students-list-names">
                {students.map(student => (
                    <Student student={student}/>
                ))}
            </div>
        </div>
    );
}

export default StudentsList;