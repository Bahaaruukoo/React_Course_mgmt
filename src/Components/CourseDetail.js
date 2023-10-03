import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CourseDetail = () => {
    const [course, setCourse] = useState("");
    const { id } = useParams();
    const url = "http://localhost:9090/courses/"+ id;
    useEffect( ()=> {fetchDetail()} ,[]);
    async function fetchDetail () {
            await axios.get(url)
                .then(
                    res => { const c = res.data ;
                        setCourse(c);
                    });
    }
    return (
        <div>
            <h2>Course: {course.title}</h2>
            <h4>Course Description</h4><p>{course.descriprion}</p>

            <Link className="btn btn-outline-primary" to={`/update/${course.id}`}>Edit Course</Link>
            <Link className="btn btn-outline-secondary mx-4" to={`/`}>Cancel</Link>
        </div>
    );
}

export default CourseDetail;