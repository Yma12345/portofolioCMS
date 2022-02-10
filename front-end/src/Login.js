import React, { useState, useEffect, useContext } from "react";
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router";
import axios from 'axios'
import Cookies from 'js-cookie';
import Envoriment from './Envoriment';
import { UserContext } from "./UserContext";
import classes from './MenuItems.module.css';

function Login() {
    const [user, setUser] = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const env = new Envoriment;
    let navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const user = { email: email, password: password };
        axios.post(env.baseUrl + 'login', user).then(function (response) {
            Cookies.set('Bearertoken', response.data.token);
            Cookies.set('Role', response.data.user.role);
            setUser({
                role: Cookies.get("Role"),
                isLoggedIn: true
            });
            navigate('/')
        }).catch(function (error) {
        });
    }
    return (
        <>
            {!user.isLoggedIn ? (
                <Card className={classes.LoginCard}>
                    <Card.Body >
                        <Card.Title>Login</Card.Title>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <br></br>
                                <input
                                    autoFocus
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Enter email"
                                />
                            </Form.Group>
                            <br></br>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <br></br>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <br></br>
                            <button variant="primary" type="submit">
                                Login
                            </button>
                        </Form>
                    </Card.Body>
                </Card >
            ) : (navigate('/'))
            }
        </>
    )
}
export default Login