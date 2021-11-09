import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "../../components/Auth/AuthForm";

const SignUpPage = () => {
    return (
        <div>
            <AuthForm isLogin={false} />
            계정이 있으신가요?<Link to="/sign-in">로그인</Link>
        </div>
    );
};

export default SignUpPage;
