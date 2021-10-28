import React from "react";

// Css
import "./MainOption.css";

const MainOption = ({ Icon, title }) => {
    return (
        <div className="MainOption">
            {Icon && <Icon className="MainOption__icon" />}
            <h3 className="MainOption__title">{title}</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                ducimus hic numquam qui provident molestias quibusdam
                perferendis fugiat tempora doloremque!
            </p>
        </div>
    );
};

export default MainOption;
