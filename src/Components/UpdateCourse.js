import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateCourse = () => {
    const {id } = useParams();
    let [t, setT] = useState("");
    let [d, setD] = useState("");
    
    const url = "http://localhost:9090/courses/"+id;
    
    let navigate = useNavigate();
    
    useEffect(()=> {getCourse();}, []);
    const getCourse = async () => {
        await axios.get(url)
        .then(
            (result) =>{ 
                setT(result.data.title);
                setD(result.data.descriprion);
            }
        );
    }
    
   
    const submitHandler = async (e) => {
        e.preventDefault();
        await axios.put(url, {title:t, descriprion:d});
        navigate("/");
    }
    
    
    return (
        <div className="mt-4">
            <h3 className="text-center">Update Course</h3>
            <form onSubmit={submitHandler} className="form shodow">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input className="form-control" defaultValue={t} onChange={(e)=>{setT(e.target.value)}} type="text" id="title" placeholder="Course title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input className="form-control" value={d} onChange={e=>setD(e.target.value)} type="text" id="desc" placeholder="Course description" />
                </div>

                <button type="submit" className="btn btn-outline-primary" >Update Course</button>
                <Link className="btn btn-outline-secondary mx-4" to={`/courses/${id}`}>Cancel</Link>
            </form>
        </div>
    );
}
export default UpdateCourse;