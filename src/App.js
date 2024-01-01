import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import TaskWrapper from "./components/task_tracker/task_wrapper";
import ApiCall from "./components/api_call/api_call";
import Home from "./components/home";


function App() {
  return (
    <>
      <Navbar />
      <div className="mt-3 mx-auto">
        
          <Routes>
            <Route path="/TaskWrapper" element={<TaskWrapper></TaskWrapper>} />
            <Route path="/ApiCall" element={<ApiCall></ApiCall>} />
            <Route path="/" element={<Home></Home>} />
          </Routes>
        
      </div>
    </>
  );
}

export default App;
