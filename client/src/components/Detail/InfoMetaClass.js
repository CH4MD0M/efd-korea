import React from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

// Css
import classes from "./DetailItem.module.scss";

const InfoMetaClass = () => {
    return (
        <>
            <div className={classes["detail__main1"]}>
                <h1 className={classes["title"]}>1. 메타버스란?</h1>
                <div className={classes["contents-container"]}>
                    <p className={classes.paragraph}>
                        메타버스(Metaverse)는 초월을 의미하는 ‘메타’(Meta)와
                        우주를 뜻하는 ‘유니버스’(Universe)의 합성어로,
                        현실세계를 뛰어넘은 디지털 기술이 만들어낸 3차원의
                        가상세계를 의미하며, 다양하게 정의하고 있음
                    </p>
                    <p className={classes.paragraph}>
                        미국전기전자학회(Institute of Electrical and Electronics
                        Engineers)의 표준에 따르면 메타버스는 ‘지각되는
                        가상세계와 연결된 영구적인 3차원 가상공간들로 구성된
                        진보된 인터넷’이라는 의미를 지님
                    </p>
                </div>
            </div>
            <div className={classes["detail__main2"]}>
                <h1 className={classes["title"]}>2. 메타버스의 분류</h1>
                <div className={classes["contents-container"]}>
                    <p className={classes.paragraph}>
                        비영리 기술 연구 단체 ASF(Acceleration Studies
                        Foundation)는 메타버스를 ‘증강과 시뮬레이션’, ‘내적인
                        것과 외적인 것’이라는 두 축을 가지고 네 가지 범주로
                        분류함
                    </p>
                    <img
                        className={classes.image}
                        src="/image/MetaClass/MV.png"
                    />
                    <h3 className={classes["title-small"]}>
                        증강현실 (Augmented Reality)
                    </h3>
                    <p className={classes.paragraph}>
                        증강현실은 현실 공간, 상황 위에 2D 또는 3D로 표현되는
                        가상의 이미지, 스토리, 환경 등을 덧입혀서 상호작용하는
                        환경을 의미하며, 사람들에게 적은 거부감으로 높은
                        몰입감을 유도
                    </p>
                    <p className={classes.paragraph}>
                        현대자동차는 맥스트와 함께 세계 최초의 AR 운전자 매뉴얼
                        앱 ‘버추얼 가이드(Virtual Guide)'를 개발하여 두꺼운 책
                        대신 AR을 이용해 정보를 직관적으로 알 수 있게 하고, 문자
                        대신 심볼로 표시되어 있는 버튼들에 카메라를 비추면
                        기능을 알 수 있게 함
                    </p>
                    <img
                        className={classes.image}
                        src="/image/MetaClass/AR.png"
                    />
                    <h3 className={classes["title-small"]}>
                        라이프로깅 (Lifelogging)
                    </h3>
                    <p className={classes.paragraph}>
                        라이프로깅은 자신의 삶에 대한 다양한 경험과 정보를
                        텍스트, 사운드, 영상 등으로 기록하여 다른 사용자들과
                        공유함으로써 삶의 순간을 데이터화하는 환경을 의미
                    </p>
                    <p className={classes.paragraph}>
                        다양한 형태의 라이프로그가 수집 가능하고 맞춤형 건강관리
                        서비스 시장이 확대될 것. 새로운 센서가 출시되고 빅데이터
                        분석 기술이 발전하면서 새로운 형태의 라이프로그를 수집할
                        수 있을 것으로 전망. 그 예로 음성인식과 텍스트 분석
                        기술의 발전이 꼽혔다. 이에 따라 라이프로그의 종류와 양이
                        많아질수록 보다 정확한 질병 예측과 맞춤형 케어가
                        확대되고 관련 산업도 확대될 수 있음
                    </p>
                    <img
                        className={classes.image}
                        src="/image/MetaClass/Lifelogging.png"
                    />
                    <h3 className={classes["title-small"]}>
                        거울세계 (Mirror Worlds)
                    </h3>
                    <p className={classes.paragraph}>
                        거울세계는 현실 세계의 모습, 정보, 구조 등을 최대한
                        사실적으로 반영하면서 정보적으로 확장된 디지털 환경을
                        의미하며, 사용자들은 거울세계를 열람함으로써 현실세계에
                        대한 정보를 얻게 됨
                    </p>
                    <p className={classes.paragraph}>
                        네이버랩스는 항공사진을 기반으로 3D 모델링을 할 수 있는
                        기술을 갖추고 있으며, 서울시와 협력해 17일간 촬영한 2만
                        5천여 장의 항공사진으로 605km2에 달하는 서울시 전역을 3D
                        모델링하여 ‘버추얼 서울’ 플랫폼을 구축
                    </p>
                    <img
                        className={classes.image}
                        src="/image/MetaClass/MW.png"
                    />
                    <h3 className={classes["title-small"]}>
                        가상세계 (Virtual Worlds)
                    </h3>
                    <p className={classes.paragraph}>
                        가상세계는 현실과 유사하거나 혹은 완전히 다른 공간,
                        시대, 문화적 배경, 등장인물, 사회 제도 등을 디지털
                        데이터로 구축한 것으로, 아바타를 통해 현실세계의
                        경제적·사회적인 활동과 유사한 활동을 한다는 특징이 있음
                    </p>
                    <p className={classes.paragraph}>
                        마이크로소프트의 원격 협업 플랫폼 ‘메쉬(Mesh)'는 서로
                        다른 지역에 있는 사용자들이 아바타를 통해 서로 같은
                        공간에서 일하는 것처럼 느끼도록 지원하는 혼합현실기반의
                        메타버스 플랫폼
                    </p>
                    <img
                        className={classes.image}
                        src="/image/MetaClass/VW.png"
                    />
                </div>
            </div>
            <div className={classes["detail__main1"]}>
                <h1 className={classes["title"]}>
                    3. 메타버스 비즈니스 도입 사례
                </h1>
                <div className={classes["contents-container"]}>
                    <p className={classes.paragraph}>
                        가구 전문점 이케아의 AR 모바일 앱은 카메라로 원하는
                        공간을 비추면 구매하고자 하는 가구가 위치되는 서비스를
                        제공
                    </p>
                    <img
                        className={classes.image}
                        src="/image/MetaClass/IKEA.png"
                    />
                    <p className={classes.paragraph}>
                        롯데건설은 직방과의 협약을 통해 건설업계 최초로
                        메타버스를 활용한 전시관을 만들었으며, 오프라인
                        모델하우스 대신 가상공간에서 아바타로 주거 상품을 확인할
                        수 있게 하고, 분양 상담 및 광고도 이 공간에서 이루어질
                        예정
                    </p>
                    <li className={classes.list}>
                        롯데건설은 직방과의 협약을 통해 건설업계 최초로
                        메타버스를 활용한 전시관을 만들었으며, 오프라인
                        모델하우스 대신 가상공간에서 아바타로 주거 상품을 확인할
                        수 있게 하고, 분양 상담 및 광고도 이 공간에서 이루어질
                        예정
                    </li>
                    <li className={classes.list}>
                        롯데건설은 게더타운 플랫폼을 활용해 채용설명회를 개최함
                    </li>
                    <img
                        className={classes.image}
                        src="/image/MetaClass/LOTTE.png"
                    />
                </div>
            </div>
            <div className={classes["detail__main2"]}>
                <h1 className={classes["title"]}>메타버스 컨텐츠 소개</h1>
                <VideoPlayer videoPath="/videos/metaclass_intro.mp4" />
            </div>
        </>
    );
};

export default InfoMetaClass;
