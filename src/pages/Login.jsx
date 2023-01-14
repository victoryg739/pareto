import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import "./style.css";

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/dashboard")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="full-screen-container">
        <Card className="login-container">
          <Card.Body>
            <h2 className="login-title">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit} className="form">
              <Form.Group id="email" className="input-group-success" >
                <Form.Label for="email" className="signup-button">Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password" className="input-group-error">
                <Form.Label for="password" className="signup-button">Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button disabled={loading} className="login-button" type="submit">
                Log In
              </Button>
            </Form>
            <div className="w-100 text-center mt-4">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <div className="signup-button">
              Need an account?
              <Link to="/signup">Sign Up</Link>
            </div>
            
            
          </Card.Body>
        </Card>
        
      </div>
      
    </>
  )
}
