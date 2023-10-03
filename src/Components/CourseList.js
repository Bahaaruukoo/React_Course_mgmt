import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const CourseList = () => {

    const [courses, setCourses] = useState([]);

    useEffect (()=> { fetchCourses(); }, []);

    async function fetchCourses()   {
        const url = "http://localhost:9090/courses";
        await axios.get(url)
            .then(res => {
                const result = res.data;
                setCourses( result );
            });
    }
    async function handleDelete (id) {
        const url = "http://localhost:9090/courses/" + id;
        await axios.delete(url);
        fetchCourses();
    }
    return <div>
            <h3 className="text-center mt-4">List of courses</h3>
            <table className="table shadow mt-4">
                <thead>
                    <tr >
                    <th scope="col">S.N</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course, index) => (
                        <tr  key={course.id}>
                            <td >{++index}</td>
                            <td> <Link to={`/courses/${course.id}`}style={{ textDecoration: 'none' }}> {course.title}</Link> </td>
                            <td>{course.descriprion}</td>
                            <td> <button className="btn btn-danger" onClick={()=>handleDelete(course.id)} >Delete</button> </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
}
export default CourseList;