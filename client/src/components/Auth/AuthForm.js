import axios from "axios";
import React, { useState, useRef } from "react";

// Css
import classes from "./AuthForm.module.css";

const AuthForm = (props) => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const passwordConfInputRef = useRef();
    const displayNameInputRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(props.isLogin);

    // const signInHandler = (event) => {
    //     event.preventDefault();
    //     const credentials = {
    //         email: emailInputRef.current.value,
    //         password: passwordInputRef.current.value,
    //     };
    // };
    const signUpHandler = (event) => {
        event.preventDefault();
        setIsLoading(true);
        const credentials = {
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
            passwordConfirm: passwordConfInputRef.current.value,
            displayName: displayNameInputRef.current.value,
        };
        const url = "http://localhost:5000/auth/signUp";

        axios
            .post(url, credentials)
            .then((response) => {
                // const result = response.data;
                // console.log(result);

                console.log(response);
            })
            .catch((error) => {
                setIsLoading(false);
                console.log(error);
            });

        // Validation
    };
    const loginCss = isLogin ? classes["auth-login"] : "";
    return (
        <section className={`${classes.auth} ${loginCss}`}>
            <h1> {isLogin ? "로그인" : "회원가입"}</h1>
            <form onSubmit={signUpHandler}>
                <div className={classes.control}>
                    <label htmlFor="email">이메일</label>
                    <input
                        type="email"
                        id="email"
                        required
                        ref={emailInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">비밀번호</label>
                    <input
                        type="password"
                        id="password"
                        required
                        ref={passwordInputRef}
                    />
                </div>
                {!isLogin && (
                    <>
                        <div className={classes.control}>
                            <label htmlFor="passwordconf">비밀번호 확인</label>
                            <input
                                type="password"
                                id="passwordconf"
                                required
                                ref={passwordConfInputRef}
                            />
                        </div>
                        <div className={classes.control}>
                            <label htmlFor="displayname">이름</label>
                            <input
                                type="text"
                                id="displayname"
                                required
                                ref={displayNameInputRef}
                            />
                        </div>
                    </>
                )}

                <div className={classes.actions}>
                    {!isLoading && (
                        <button>{isLogin ? "로그인" : " 회원가입"} </button>
                    )}
                    {isLoading && <p>요청중...</p>}
                </div>
            </form>
        </section>
    );
};

export default AuthForm;
