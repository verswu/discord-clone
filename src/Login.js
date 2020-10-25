import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import React from 'react'
import './Login.css';

function Login() {
    const signIn = () => {
        //google login
        auth.signInWithPopup(provider)
            .catch(error => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/sco/9/98/Discord_logo.svg" alt="" />
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;
