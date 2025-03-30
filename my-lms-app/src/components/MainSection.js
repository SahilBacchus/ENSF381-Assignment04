import React, { useState, useEffect } from 'react';
import courses from '../data/courses';
import testimonials from '../data/testimonials';
import './MainSection.css';

function MainSection() {
    const [courseData, setCourseData] = useState([]);
    const [testamonialData, setTestamonialData] = useState([]);

    useEffect(() => {
        const randomCourses = courses.sort(() => 0.5 - Math.random()).slice(0, 3);
        setCourseData(randomCourses);
    
        const randomTestimonials = testimonials.sort(() => 0.5 - Math.random()).slice(0, 2);
        setTestamonialData(randomTestimonials);
      }, []);

    return (
      <div className="MainSection">
        <section id="about">
            <h2>About LMS</h2>
            <p>The Learning Management System (LMS) helps students and instructors manage courses, quizzes, and track performance efficiently.</p>
            <h3>Key Features:</h3>
            <div>
                <p>- Enroll in courses</p>
                <p>- Attempt quizzes</p>
                <p>- View leaderboards</p>
            </div>
        </section>
        <section id="Featured Courses">
            <h2>Featured Courses:</h2>
            <div id="random-courses">
                {courseData.map((course) => (
                    <div class="course">
                        <img src={course.image} alt="Course 1"/>
                        <p>Course ID: {course.id}</p> <br/>
                        <p>Course Name: {course.name}</p> <br/>
                        <p>Course Instructor: {course.instructor}</p> <br/>
                        <p>Course Description: {course.description}</p> <br/>
                        <p>Course Duration: {course.duration}</p> <br/>
                    </div>
                ))}
            </div>
        </section>
        <section id="Testimonials">
            <h2>Testimonials:</h2>
            {testamonialData.map((testimonial) => (
                <div class="testimonial">
                    <p>Student Name: {testimonial.studentName}</p>
                    <p>Course Name: {testimonial.courseName}</p>
                    <p>Review: {testimonial.review}</p>
                    <p>Rating: {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}</p>
                </div>
            ))}
        </section>
      </div>
    );
  }
  
export default MainSection;