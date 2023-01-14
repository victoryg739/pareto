import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import React from "react"
import Signup from "./pages/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from './contexts/AuthContext';
import ForgotPassword from "./pages/ForgotPassword"
import UpdateProfile from "./pages/UpdateProfile"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
       </Routes>
  </BrowserRouter>
  
  );
}

export default App;
