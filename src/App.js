import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import React from "react"
import Signup from "./pages/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from './contexts/AuthContext';
//import { BrowserRouter as Router, Route } from "react-router-dom"
// import Dashboard from "./pages/Dashboard"
//import PrivateRoute from "./pages/PrivateRoute"
import ForgotPassword from "./pages/ForgotPassword"
import UpdateProfile from "./pages/UpdateProfile"

function App() {
  return (
<<<<<<< HEAD
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/update-profile" element={<UpdateProfile/>} />
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Login/>} />
              <Route path="/forgot-password" element={<ForgotPassword/>} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Container>
  )
} 
=======
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
       </Routes>
  </BrowserRouter>
  
  );
}
>>>>>>> f2025ed (test)

export default App;
