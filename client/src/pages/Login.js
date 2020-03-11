import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import logoImg from '../img/logo.jpg';
import { Card, Logo, Form, Input, Button, Error } from '../components/AuthForm';
import { useAuth } from '../context/auth';

function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();
    const referer = '/';

    function prePostCheck() {

        postLogin();
    }

    function postLogin() {
        axios.post("/api/auth/login", {
            email: userName,
            password
        }).then(result => {
            console.log(result);
            if (result.data !== "No user found with that email." && result.data !== "Invalid password.") {
                setAuthTokens(result.data);
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }

    if (isLoggedIn) {
        return <Redirect to={referer} />;
    }

    return (
        <Card>
            <Logo src={logoImg} />
            <Form>
                <Input
                    type='email'
                    value={userName}
                    onChange={e => {
                        setUserName(e.target.value);
                    }}
                    placeholder='email'
                />
                <Input
                    type='password'
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    placeholder='password'
                />
                <Button onClick={prePostCheck}>Sign In</Button>
            </Form>
            <Link to='/signup'>Don't have an account?</Link>
            {isError && <Error>The username or password provided were incorrect!</Error>}
        </Card>
    );
};

export default Login;