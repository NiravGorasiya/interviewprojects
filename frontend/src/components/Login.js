import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context/Context';

const Login = () => {
    const history = useNavigate()
    const initialValues = {
        email: "",
        password: ""
    }

    const [userData, setUserData] = useState(initialValues)
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const { dispatch, isFetching } = useContext(Context)
    const handleSubmit = async () => {
        setError(false);
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post("http://localhost:5000/user/signin", userData)
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.info })
            history("/home")
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE" })
            setError(true);
        }
    }

    return (
        <div className='container'>
            <h2>Register page</h2>
            <form>
                <Form.Control
                    type="text"
                    name="email"
                    value={userData.email}
                    placeholder="Enter a email"
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
            Don't have an account?
            <Link to="/register">Sign up</Link>
            {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}
        </div>
    )
}

export default Login