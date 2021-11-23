import React, { useState } from "react";

const AuthContext = React.createContext({
    token: "",
    errorMsg: "",
    isLoggedIn: false,
    isErrorOccured: false,
    login: (token) => {},
    logout: () => {},
    modal: (errorMsg) => {},
});

const calculateReaminingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remainingDuration = adjExpirationTime - currentTime;

    return remainingDuration;
};

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem("token");
    const [token, setToken] = useState(initialToken);
    const [errorMsg, setErrorMsg] = useState(null);

    const userIsLoggedIn = !!token;
    const errorOccured = !!errorMsg;

    // 로그아웃
    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    // 로그인
    const loginHandler = (token, expirationTime) => {
        setToken(token);
        localStorage.setItem("token", token);

        const remainigTime = calculateReaminingTime(expirationTime);
        setTimeout(logoutHandler, remainigTime);
    };
    // 모달
    const modalHandler = (msg) => {
        setErrorMsg(msg);
    };
    const CloseModalHaldler = () => {
        setErrorMsg(null);
    };

    const contextValue = {
        token: token,
        errorMsg: errorMsg,
        isLoggedIn: userIsLoggedIn,
        isErrorOccured: errorOccured,
        login: loginHandler,
        logout: logoutHandler,
        modal: modalHandler,
        closeModal: CloseModalHaldler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};
export default AuthContext;
