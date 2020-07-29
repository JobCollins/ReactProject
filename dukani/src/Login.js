import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import "./Login.css"
import { auth } from './firebase';

function Login() {
    const history = useHistory()
    const [ email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = e => {
        e.preventDefault();  //stops refresh
        //login logic

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //login, redirect to home
            history.push("/")
        })
        .catch(e => alert(e.message))
    }

    const register = e => {
        e.preventDefault();  //stops refresh
        //register logic
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            //create user and login
            history.push("/")
        })
        .catch(e => alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://img.favpng.com/24/8/14/naivas-limited-logo-brand-tuskys-product-png-favpng-R0uYxVwf8CHMGp5eHHrLh7Lrp.jpg"
                    alt=""
                />
            </Link>  

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password"/>
                    <button onClick = { login } type="submit" className="login__signIn">Sign in</button>
                </form>
                <p>
                    By signing in you agree to dukani's Conditions of Use and Sale. Please see our
                    Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
                </p>
                <button onClick={ register } className="login__register">Create your Dukani Account</button>
            </div>          
        </div>
    )
}

export default Login
