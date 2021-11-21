import React from "react";
import { Link } from "react-router-dom";
import SignInForm from "../../components/Auth/SignInForm";

const SignInPage = () => {
    return (
        <div>
            <SignInForm />
            <div>
                계정이 없으신가요?<Link to="/sign-up">회원가입</Link>
            </div>
        </div>
    );
};

export default SignInPage;
