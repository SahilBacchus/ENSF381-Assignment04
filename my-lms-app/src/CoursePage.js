import React, { useState, useEffect} from 'react';
import AppHeader from './components/AppHeader';
import Footer from './components/Footer';
import CourseCatalog from './components/CourseCatalog';
import EnrollmentList from './components/EnrollmentList';


function CoursesPage() {

    // --- Handling Local Storage ---//
    const [enrolledCourses, setEnrolledCourses] = useState(() => {
        const storedCourses = localStorage.getItem('enrolledCourses');
        try {
            return storedCourses ? JSON.parse(storedCourses) : {};
        } catch (error) {
            console.error("Failed to parse enrolled courses from localStorage", error);
            return {};
        }
    });

    useEffect(() => {
        localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
    }, [enrolledCourses]);


    // --- Enrollment Logic ---//
    const handleEnroll = (courseToEnroll) => {
        setEnrolledCourses(prevEnrolled => {
            if (prevEnrolled[courseToEnroll.id]) {
                return prevEnrolled;
            }
            return {
                ...prevEnrolled,
                [courseToEnroll.id]: courseToEnroll
            };
        });
    };

    // --- Drop Logic ---
    const handleDrop = (courseIdToDrop) => {
        setEnrolledCourses(prevEnrolled => {
            const updatedEnrolled = { ...prevEnrolled };
            delete updatedEnrolled[courseIdToDrop];
            return updatedEnrolled;
        });
    };


    const enrolledCourseIds = Object.keys(enrolledCourses).map(Number);
  


    return (
        <div className="courses-page">
            <AppHeader />
            <div className="content">
                <CourseCatalog
                    onEnroll={handleEnroll}
                    enrolledCourseIds={enrolledCourseIds}
                />
                <EnrollmentList
                    enrolledCourses={enrolledCourses}
                    onDrop={handleDrop}
                />
            </div>
            <Footer />
        </div>
    );
}

export default CoursesPage;