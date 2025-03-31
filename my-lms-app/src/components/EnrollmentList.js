import React, {useEffect } from 'react';
import EnrolledCourse from './EnrolledCourse';

function EnrollmentList({ enrolledCourses, onDrop}) { 
    const enrolledCoursesArray = Object.values(enrolledCourses);


    //-- Calculate Credit hours --//
    let totalWeeks = 0;
    for (let i = 0; i < enrolledCoursesArray.length; i++) {
        const course = enrolledCoursesArray[i];
        const durationValue = parseInt(course.duration) || 0;
        totalWeeks += durationValue;
    }

    const totalCreditHours = `${totalWeeks*40} Hours`;
    const totalDuration = `${totalWeeks} Weeks`;



    // --- Save enrollment data to local storage ---//
    useEffect(() => {
        localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
    }, [enrolledCourses]);

    return (
        <div className="enrollment-list-container">
            <hr></hr>
            <h2>My Enrolled Courses</h2>
            {enrolledCoursesArray.length === 0 ? ( 
                <p>You are not enrolled in any courses yet.</p>
            ) : (
                <>
                    <ul className="enrollment-list">
                        {enrolledCoursesArray.map(course => (
                            <EnrolledCourse
                                key={course.id}
                                course={course}
                                onDrop={onDrop}
                            />
                        ))}
                    </ul>
                    <p className="total-duration">
                        Total Duration: <strong>{totalDuration}</strong>  |
                        Total Credit Hours: <strong>{totalCreditHours}</strong>
                        
                    </p>
                </>
            )}
        </div>
    );
}

export default EnrollmentList;