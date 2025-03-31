import React, { useState } from 'react';
import courseImage from '../images/course1.jpg';
import pendingImage from '../images/course2.jpg';


function CourseItem({ course, onEnroll, isEnrolled }) {
    const [showDescription, setShowDescription] = useState(false);

    const handleMouseEnter = () => {
        setShowDescription(true);
    };

    const handleMouseLeave = () => {
        setShowDescription(false);
    };

    return (
        <div
            className="course-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={isEnrolled ? pendingImage : courseImage} alt={course.name} className="course-image" />
            <h3>{course.name}</h3>
            <p><b>Instructor:</b> {course.instructor}</p>
            <p><b>Duration:</b> {course.duration}</p>
            {showDescription && (
                <p className="course-description">{course.description}</p>
            )}
            <button
                onClick={() => onEnroll(course)}
            >
                {isEnrolled ? 'Enrolled' : 'Enroll Now'}
            </button>
        </div>
    );
}


export default CourseItem;