import React, { useContext, useEffect, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import AuthContext from "../../store/auth-context";

// Css
import classes from "./Modal.module.scss";

const Modal = (props) => {
    const authCtx = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        authCtx.setErrorMsg(null);
    };

    useEffect(() => {
        setIsModalOpen(true);
        const closeModalByKeyboard = (e) => {
            if (e.keyCode === 27) {
                closeModal();
            }
        };
        window.addEventListener("keydown", closeModalByKeyboard);
        return () => {
            setIsModalOpen(false);
            window.removeEventListener("keydown", closeModalByKeyboard);
        };
    });

    return (
        <div className={classes["modal__backdrop"]}>
            <div className={classes["modal__container"]}>
                <h2 className={classes["modal__text"]}>{props.msg}</h2>
                <div
                    className={classes["modal__close-btn"]}
                    onClick={closeModal}
                >
                    <CancelIcon />
                </div>
            </div>
        </div>
    );
};
export default Modal;
