import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../../components/Auth/SignUpForm";

const SignUpPage = () => {
    return (
        <div>
            <SignUpForm />
            계정이 있으신가요?<Link to="/sign-in">로그인</Link>
        </div>
    );
};

export default SignUpPage;
