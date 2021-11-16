import axios from "axios";
import React, { useState, useRef, useContext } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../store/auth-context";
import { URL } from "../../constants/config";

// Css
import classes from "./AuthForm.module.css";

const AuthForm = (props) => {
    const history = useHistory();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const passwordConfInputRef = useRef();
    const displayNameInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(props.isLogin);

    const loginCss = isLogin ? classes["auth-login"] : "";

    const SubmitHandler = (event) => {
        const url = isLogin ? `${URL}/auth/signIn` : `${URL}/auth/signUp`;
        const credentials = isLogin
            ? {
                  email: emailInputRef.current.value,
                  password: passwordInputRef.current.value,
              }
            : {
                  email: emailInputRef.current.value,
                  password: passwordInputRef.current.value,
                  passwordConfirm: passwordConfInputRef.current.value,
                  displayName: displayNameInputRef.current.value,
              };
        event.preventDefault();
        setIsLoading(true);

        axios
            .post(url, credentials)
            .then((response) => {
                setIsLoading(false);
                isLogin &&
                    authCtx.login(
                        response.data.session.passport.user._id,
                        response.data.session.cookie.expires
                    );
                history.replace("/");
            })
            .catch((error) => {
                setIsLoading(false);
                console.log(error);
            });

        // Validation
    };

    return (
        <section className={`${classes.auth} ${loginCss}`}>
            <h1> {isLogin ? "로그인" : "회원가입"}</h1>
            <form onSubmit={SubmitHandler}>
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
