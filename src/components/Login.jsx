import React, { useState } from "react";
import "../Css/Login.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="wrapper">
            <div className="form-box">
                {isLogin ? (
                    <div className="login-container">
                        <div className="top">
                            <span>
                                Don't have an account?{" "}
                                <a href="#" onClick={toggleForm}>
                                    Sign Up
                                </a>
                            </span>
                            <header>Login</header>
                        </div>
                        <div className="input-box">
                            <input type="text" className="input-field" placeholder="Username or Email" />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="password" className="input-field" placeholder="Password" />
                            <FaLock className="icon" />
                        </div>
                        <div className="input-box">
                            <button className="submit">Sign In</button>
                        </div>
                        <div className="two-col">
                            <div className="one">
                                <input type="checkbox" id="login-check" />
                                <label htmlFor="login-check"> Remember Me</label>
                            </div>
                            <div className="two">
                                <label>
                                    <a href="#">Forgot password?</a>
                                </label>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="register-container">
                        <div className="top">
                            <span>
                                Have an account?{" "}
                                <a href="#" onClick={toggleForm}>
                                    Login
                                </a>
                            </span>
                            <header>Sign Up</header>
                        </div>
                        <div className="two-forms">
                            <div className="input-box">
                                <input type="text" className="input-field" placeholder="Firstname" />
                                <FaUser className="icon" />
                            </div>
                            <div className="input-box">
                                <input type="text" className="input-field" placeholder="Lastname" />
                                <FaUser className="icon" />
                            </div>
                        </div>
                        <div className="input-box">
                            <input type="text" className="input-field" placeholder="Email" />
                            <FaEnvelope className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="password" className="input-field" placeholder="Password" />
                            <FaLock className="icon" />
                        </div>
                        <div className="input-box">
                            <button className="submit">Register</button>
                        </div>
                        <div className="two-col">
                            <div className="one">
                                <input type="checkbox" id="register-check" />
                                <label htmlFor="register-check"> Remember Me</label>
                            </div>
                            <div className="two">
                                <label>
                                    <a href="#">Terms & conditions</a>
                                </label>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
