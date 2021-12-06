import React from "react";

// Css
import classes from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes["footer-context"]}>
                <h3 className={classes.copyright}>
                    &copy; Copyright 2020 by efdkorea.
                </h3>
                <h3 className={classes["company-address"]}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Voluptates, libero nobis.
                </h3>
            </div>
        </div>
    );
};

export default Footer;

/* 
로고 | 서비스 이용 약관 | 개인정보 처리방침
|주식회사 efdkorea
    대표자: 홍길동 | 사업자등록번호: 
    주소
    전화번호 | 이메일
|ⓒEFDKOREA. ALL RIGHTS RESERVED
*/
