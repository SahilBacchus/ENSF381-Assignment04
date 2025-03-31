import React from 'react';

function EnrolledCourse({ course, onDrop }) {
    return (
        <li className="enrolled-course-item">
            <h4>{course.name}</h4>
            <p>Credit Hours: {parseInt(course.duration)*40} ({course.duration})</p>
            <button onClick={() => onDrop(course.id)} className="drop-button">
                Drop Course
            </button>
        </li>
    );
}

export default EnrolledCourse;