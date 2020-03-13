import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import logoImg from '../img/user.png';
import Nav from '../components/Nav';
import NavBottom from '../components/NavBottom';
import { Card, Logo, Form, Input, Button } from '../components/AuthForm';
import { useAuth } from '../context/auth';

function Signup() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const { setAuthTokens } = useAuth();
    const referer = '/';

    function postSignup() {
        axios.post("/api/auth/signup", {
            email: userName,
            password
        }).then(result => {
            console.log(result);
            if (result.status === 200) {
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

    function checkEmail() {
        const regexEmail = /\S+@\S+\.\S+/;
        if (regexEmail.test(userName)) {
            checkPass();
        } else {
            alert("Use valid email. Example: example@practice.com.")
        }
    }

    function checkPass() {
        if (password === password2) {
            postSignup();
        } else {
            alert("Passwords do not match.")
        }
    }


    return (
        <div>
            <Nav></Nav>
            <NavBottom></NavBottom>

            <Card>
                <Logo src={logoImg} />
                <Form >
                    <Input
                        type='email'
                        onChange={e => {
                            setUserName(e.target.value);
                        }}
                        placeholder='email'
                    />
                    <Input
                        type='password'
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                        placeholder='password'
                    />
                    <Input
                        type='password'
                        onChange={e => {
                            setPassword2(e.target.value);
                        }}
                        placeholder='confirm password'
                    />
                    <Button onClick={checkEmail}>Sign Up</Button>
                </Form>
                <Link to='/login'>Already have an account?</Link>
            </Card>
        </div>
    );
};

export default Signup;