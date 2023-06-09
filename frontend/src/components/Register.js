import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const history = useNavigate()
    const initialValues = {
        username: "",
        email: "",
        mobile: "",
        password: ""
    }

    const [userData, setUserData] = useState(initialValues)
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        setError(false);
        try {
            const response = await axios.post("http://localhost:5000/user/signup", userData)
            console.log(response);
            history("/login")
        } catch (error) {
            setError(true);
        }
    }

    return (
        <div className='container'>
            <h2>Register page</h2>
            <form>
                <Form.Control
                    type="text"
                    name="username"
                    value={userData.username}
                    placeholder="Enter a username"
                    onChange={handleChange}
                />
                <Form.Control
                    type="email"
                    name="email"
                    value={userData.email}
                    placeholder="Enter a email"
                    onChange={handleChange}
                />
                <Form.Control
                    type="number"
                    name="mobile"
                    value={userData.mobile}
                    placeholder="Enter a mobile"
                    onChange={handleChange}
                />
                <Form.Control
                    type="password"
                    name="password"
                    value={userData.password}
                    placeholder="Enter a password"
                    onChange={handleChange}
                />
                <Button variant="primary" onClick={handleSubmit}>Submit</Button>
            </form>
            Already have an account?
            <Link to="/login">Log in</Link>
            {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}
        </div>
    )
}

export default Register