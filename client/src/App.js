import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router";
import AuthContext from "./store/auth-context";

import Layout from "./components/Layout/Layout";
import MainPage from "./pages/Main/MainPage";

import {
    InfoEngEle,
    InfoEngMid,
    InfoEngHigh,
} from "./pages/DetailPage/InfoEngPage";
import { InfoKorIntro, InfoKorVideo } from "./pages/DetailPage/InfoKorPage";
import Customer from "./pages/Customer/Customer";
import MetaClass from "./pages/MetaClass/MetaClass";
import SignInPage from "./pages/User/SignInPage";
import SignUpPage from "./pages/User/SignUpPage";
import Profile from "./pages/User/ProfilePage";
import Modal from "./components/Modal/Modal";

// Css
import "./App.css";

const App = () => {
    const authCtx = useContext(AuthContext);
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/info-Eng/ele" exact component={InfoEngEle} />
                <Route path="/info-Eng/mid" exact component={InfoEngMid} />
                <Route path="/info-Eng/high" exact component={InfoEngHigh} />
                <Route path="/info-Kor/intro" exact component={InfoKorIntro} />
                <Route path="/info-Kor/sample" exact component={InfoKorVideo} />
                {/* <Route path="/intro/:school" exact component={IntroPage} /> */}
                <Route path="/customer" component={Customer} />
                <Route path="/meta-class" component={MetaClass} />

                {!authCtx.isLoggedIn && (
                    <Route path="/sign-in" exact component={SignInPage} />
                )}
                {!authCtx.isLoggedIn && (
                    <Route path="/sign-up" exact component={SignUpPage} />
                )}

                <Route path="/profile" exact>
                    {authCtx.isLoggedIn && <Profile />}
                    {!authCtx.isLoggedIn && <Redirect to="sign-in" />}
                </Route>

                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
            {authCtx.isErrorOccured && <Modal msg={authCtx.errorMsg}></Modal>}
        </Layout>
    );
};

export default App;
