import axios from "axios";
import React, { useState, useRef, useContext } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../store/auth-context";
import { URL } from "../../constants/config";

// Css
import classes from "./AuthForm.module.scss";

const SignInForm = (props) => {
    const history = useHistory();
    const authCtx = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const SubmitHandler = (event) => {
        event.preventDefault();
        setIsLoading(true);

        const url = `${URL}/auth/signIn`;
        const credentials = {
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
        };

        axios
            .post(url, credentials)
            .then((response) => {
                authCtx.login(
                    response.data.session.passport.user._id,
                    response.data.session.cookie.expires
                );
                history.replace("/");
            })
            .catch((error) => {
                setIsLoading(false);
                if (error.response) {
                    const errorMsg = error.response.data.message;
                    authCtx.modal(errorMsg);
                }
            });
    };
    return (
        <section className={`${classes.auth} ${classes["auth-login"]}`}>
            <h1> 로그인</h1>
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

                <div className={classes.actions}>
                    {!isLoading && <button>로그인 </button>}
                    {isLoading && <p>요청중...</p>}
                </div>
            </form>
        </section>
    );
};

export default SignInForm;
