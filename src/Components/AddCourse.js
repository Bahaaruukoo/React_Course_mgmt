import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCourse = (e) => {
    const [t, setT] = useState("");
    const [d, setD] = useState("");
    const url = "http://localhost:9090/courses";
    
    let navigate = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        const course = {title:t, descriprion:d};
        await axios.post(url, course);
        navigate("/");
    }
    return (
        <div className="mt-4">
            <h3 className="text-center">Add Course</h3>
            <form onSubmit={submitHandler} className="form shodow">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input className="form-control"value={t} onChange={(e)=>{setT(e.target.value)}} type="text" id="title" placeholder="Course title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input className="form-control" value={d} onChange={(e)=>{setD(e.target.value)}} type="text" id="desc" placeholder="Course description" />
                </div>

                <button type="submit" className="btn btn-outline-primary" >Add Course</button>                
            </form>
        </div>
    );
}
export default AddCourse;