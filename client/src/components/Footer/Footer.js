import React from "react";
import "./Footer.css";

import Navigation from "../Header/Navigation";

const Footer = () => {
    return (
        <div className="footer">
            <ul class="footer-items">
                <li class="footer-item">교육안내</li>
                <li class="footer-item">교육자료소개</li>
                <li class="footer-item">고객지원</li>
                <li class="footer-item">My Class</li>
            </ul>

            <div class="footer-context">
                <h3 className="copyright">
                    &copy; Copyright 2020 by efdkorea.
                </h3>
                <h3 className="company-address">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Voluptates, libero nobis.
                </h3>
            </div>
        </div>
    );
};

export default Footer;
