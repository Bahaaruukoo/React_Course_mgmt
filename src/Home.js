import {
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import AddCourse from "./Components/AddCourse";
import CourseDetail from "./Components/CourseDetail";
import CourseList from "./Components/CourseList";
import Navbar from "./Components/Navbar";
import UpdateCourse from "./Components/UpdateCourse";
const Home = () => {
    return (
        <div>
            <Router>
                <Navbar/>
                <div className="container">
                <Routes>
                    <Route exact path ="/" element = {<CourseList/>}></Route>
                    <Route path="/addcourse" element= {<AddCourse/>}></Route>
                    <Route path="/courses/:id" element= {< CourseDetail />}></Route>            
                    <Route path="/update/:id" element= {< UpdateCourse />}></Route>
                </Routes>
                
                </div>
            </Router>
      
        </div>
    )
}

export default Home;