import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Styles
import "./App.css"

// pages and components 

import Dashboard from "./pages/dashboard/Dashboard"
import Create from "./pages/create/Create"
import Project from "./pages/project/Project"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"




function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={Dashboard} />
            <Route path="/create" element={Create} />
            <Route path="/projects/id" element={Project} />
            <Route path="/login" element={Login} />
            <Route path="/signup" element={Signup} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}







export default App
