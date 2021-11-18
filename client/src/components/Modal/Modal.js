import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

// Css
import classes from "./Modal.module.scss";

const Modal = (props) => {
    const authCtx = useContext(AuthContext);

    return (
        <div className={classes["modal__backdrop"]}>
            <div className={classes["modal__container"]}>
                <h2 className={classes["modal__title"]}>{props.msg}</h2>
                <button type="button" onClick={authCtx.closeModal}>
                    닫기
                </button>
            </div>
        </div>
    );
};
export default Modal;
