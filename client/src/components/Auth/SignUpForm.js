import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { URL } from "../../constants/config";
import AuthContext from "../../store/auth-context";

// Css
import classes from "./AuthForm.module.scss";

const SignUpForm = () => {
    const authCtx = useContext(AuthContext);

    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
    } = useForm({
        mode: "onChange",
    });

    const history = useHistory();
    // State
    const [isLoading, setIsLoading] = useState(false);

    // SubmitHandler
    const SubmitHandler = (data) => {
        setIsLoading(true);

        const { email, password, passwordConfirm, displayName } = data;
        const url = `${URL}/auth/signUp`;
        const credentials = {
            email: email,
            password: password,
            passwordConfirm: passwordConfirm,
            displayName: displayName,
        };

        axios
            .post(url, credentials)
            .then((response) => {
                history.replace("/sign-in");
            })
            .catch((error) => {
                if (error.response) {
                    setIsLoading(false);
                    const errorMsg = error.response.data.message;
                    authCtx.modal(errorMsg);
                }
            });
    };

    return (
        <div className={classes["signup-container"]}>
            <div className={classes["form-panel-signup"]}>
                <div className={classes["signup-form"]}>
                    <h1> 회원가입</h1>
                    <form onSubmit={handleSubmit(SubmitHandler)}>
                        <div className={classes["signup-input"]}>
                            <label htmlFor="email">이메일</label>
                            <input
                                type="text"
                                name="email"
                                ref={register({
                                    required: "이메일을 입력해주세요.",
                                    pattern: {
                                        value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                                        message:
                                            "이메일 형식으로 입력해 주세요.",
                                    },
                                })}
                            />
                            {errors.email && (
                                <div className={classes["error-msg"]}>
                                    <p>{errors.email.message}</p>
                                </div>
                            )}
                        </div>
                        <div className={classes["signup-input"]}>
                            <label htmlFor="password">비밀번호</label>
                            <input
                                type="password"
                                name="password"
                                ref={register({
                                    required: "비밀번호를 입력해주세요.",
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
                                        message:
                                            "비밀번호는 8~16자로 영문 소문자, 숫자, 특수기호를 조합해서 사용하세요.",
                                    },
                                })}
                            />
                            {errors.password && (
                                <div className={classes["error-msg"]}>
                                    <p>{errors.password.message}</p>
                                </div>
                            )}
                        </div>

                        <div className={classes["signup-input"]}>
                            <label htmlFor="passwordConfirm">
                                비밀번호 확인
                            </label>
                            <input
                                type="password"
                                name="passwordConfirm"
                                ref={register({
                                    required: "비밀번호 확인을 해주세요.",
                                    validate: {
                                        matchesPreviousPassword: (value) => {
                                            const { password } = getValues();
                                            return (
                                                password === value ||
                                                "비밀번호가 일치하지 않습니다."
                                            );
                                        },
                                    },
                                })}
                            />
                            {errors.passwordConfirm && (
                                <div className={classes["error-msg"]}>
                                    <p>{errors.passwordConfirm.message}</p>
                                </div>
                            )}
                        </div>
                        <div className={classes["signup-input"]}>
                            <label htmlFor="displayName">이름</label>
                            <input
                                type="text"
                                name="displayName"
                                ref={register({
                                    required: "이름을 입력해 주세요.",
                                    pattern: {
                                        value: /^[가-힣]{2,7}$/,
                                        message:
                                            "2~7글자, 한글로 입력해 주세요.",
                                    },
                                })}
                            />
                            {errors.displayName && (
                                <div className={classes["error-msg"]}>
                                    <p>{errors.displayName.message}</p>
                                </div>
                            )}
                        </div>

                        <div className={classes["signup-btn"]}>
                            {!isLoading && (
                                <button type="submit">회원가입</button>
                            )}
                            {isLoading && <p>요청중...</p>}
                        </div>
                    </form>
                </div>
                <div className={classes["signup-link"]}>
                    계정이 있으신가요?<Link to="/sign-in">로그인</Link>
                </div>
            </div>
            <img
                className={`${classes["image-panel"]} ${classes["image-panel-signup"]}`}
                src="/image/User/register.svg"
                alt="login"
            />
        </div>
    );
};

export default SignUpForm;
