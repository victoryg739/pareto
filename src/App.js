import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import React from "react"
import Signup from "./pages/Signup"
//import { Container } from "react-bootstrap"
import { AuthProvider } from './contexts/AuthContext';
import ForgotPassword from "./pages/ForgotPassword"
import UpdateProfile from "./pages/UpdateProfile"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/update-password" element={<UpdateProfile/>}/>
      </Routes>
      </AuthProvider>
  </BrowserRouter>
  
  );
}

export default App;
