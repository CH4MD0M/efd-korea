import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "../../components/Auth/AuthForm";

const SignInPage = () => {
    return (
        <div>
            <AuthForm isLogin={true} />
            계정이 없으신가요?<Link to="/sign-up">회원가입</Link>
        </div>
    );
};

export default SignInPage;
