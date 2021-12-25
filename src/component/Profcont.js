import {useState} from 'react'
import React from 'react'
const Profcont = () => {
    const [courses, setCourses] = useState([
        {
            id: 1,
            CourseId: "APCT341",
            title: "Software Engineering",
            Grade: "A",
            completed: true
        },
        {
            id: 2,
            CourseId: "CSCI241C",
            title: "Data Structures",
            Grade: "A",
            completed: true
        },
        {
            id: 3,
            CourseId: "CMOP184C",
            title: "Operating Systems",
            Grade: "A",
            completed: true
        },
        {
            id: 4,
            CourseId: "CSCI398",
            title: "Advanced Applied Programming",
            Grade: "A",
            completed: true
        },
        {
            id: 5,
            CourseId: "APCT341",
            title: "Advanced Web Development ",
            Grade: "A",
            completed: true
        },
        {
            id: 6,
            CourseId: "CSCI342",
            title: "System & Network Adm",
            Grade: "B",
            completed: true
        },
        {
            id: 7,
            CourseId: "CSCI412",
            title: "Operating Systems",
            Grade: "B",
            completed: true
        },
        {
            id: 8,
            CourseId: "CSCI415",
            title: "Computer Architecture",
            Grade: "B",
            completed: true
        },
        {
            id: 9,
            CourseId: "CSCI452",
            title: "Database Systems Design",
            Grade: "B",
            completed: true
        },
        {
            id: 10,
            CourseId: "CSCI414",
            title: "	Intro Artificial Intelligence",
            Grade: "A",
            completed: true
        },
        {
            id: 11,
            CourseId: "CSCI434",
            title: "Analysis Of Algorithms",
            Grade: "A",
            completed: 1
        },
    ]);
 const handleDelet=(id)=>{
        const newcourse=courses.filter(course=>course.id !==id);
        setCourses(newcourse);
    }
    return (
        <div className="practice">
<h1>My core course </h1>
<h5>*********************************************************</h5> 
            {courses.map((course) => (
                <div className="blog-preview" key={course.id}>
                    <h4>CourseId:</h4>{course.CourseId} 
                    <h4>Title:</h4> {course.title}
                    <h4>Grade:</h4> {course.Grade}
                    <h4>completed:</h4>{course.completed}
                    <button handleDelet={handleDelet}>deletlist</button>
    <h5>*********************************************************</h5>
                </div>
            ))}
        </div>
    );  
}
    
export default Profcont