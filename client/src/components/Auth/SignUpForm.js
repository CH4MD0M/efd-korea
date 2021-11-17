import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";

import { URL } from "../../constants/config";

// Css
import classes from "./AuthForm.module.scss";

const SignUpForm = () => {
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
                setIsLoading(false);
                alert(error);
            });
    };

    return (
        <section className={`${classes.auth} `}>
            <h1> 회원가입</h1>
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <div className={classes.control}>
                    <label htmlFor="email">이메일</label>
                    <input
                        type="text"
                        name="email"
                        ref={register({
                            required: "이메일을 입력해주세요.",
                            pattern: {
                                value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                                message: "이메일 형식으로 입력해 주세요.",
                            },
                        })}
                    />
                    {errors.email && (
                        <p className={classes["error-msg"]}>
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <div className={classes.control}>
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
                        <p className={classes["error-msg"]}>
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <div className={classes.control}>
                    <label htmlFor="passwordConfirm">비밀번호 확인</label>
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
                        <p className={classes["error-msg"]}>
                            {errors.passwordConfirm.message}
                        </p>
                    )}
                </div>
                <div className={classes.control}>
                    <label htmlFor="displayName">이름</label>
                    <input
                        type="text"
                        name="displayName"
                        ref={register({
                            required: "이름을 입력해 주세요.",
                            pattern: {
                                value: /^[가-힣]{2,7}$/,
                                message: "2~7글자, 한글로 입력해 주세요.",
                            },
                        })}
                    />
                    {errors.displayName && (
                        <p className={classes["error-msg"]}>
                            {errors.displayName.message}
                        </p>
                    )}
                </div>

                <div className={classes.actions}>
                    {!isLoading && <button type="submit">회원가입</button>}
                    {isLoading && <p>요청중...</p>}
                </div>
            </form>
        </section>
    );
};

export default SignUpForm;
