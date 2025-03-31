import React from 'react';
import CourseItem from './CourseItem';
import coursesData from '../data/courses';

function CourseCatalog({ onEnroll, enrolledCourseIds }) {
    return (
        <div className="course-catalog-container">
            <h2>Available Courses</h2>
            <div className="course-catalog-grid">
                {coursesData.map(course => (
                    <CourseItem
                        key={course.id}
                        course={course}
                        onEnroll={onEnroll}
                        isEnrolled={enrolledCourseIds.includes(course.id)}
                    />
                ))}
            </div>
        </div>
    );
}


export default CourseCatalog;