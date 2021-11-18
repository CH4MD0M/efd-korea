import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router";
import AuthContext from "./store/auth-context";

import Layout from "./components/Layout/Layout";
import MainPage from "./pages/Main/MainPage";
import {
    InfoPageEle,
    InfoPageMid,
    InfoPageHigh,
} from "./pages/DetailPage/InfoPage";
import {
    IntroPageEle,
    IntroPageMid,
    IntroPageHigh,
} from "./pages/DetailPage/IntroPage";
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
                <Route path="/info/ele" exact component={InfoPageEle} />
                <Route path="/info/mid" exact component={InfoPageMid} />
                <Route path="/info/high" exact component={InfoPageHigh} />
                <Route path="/intro/ele" exact component={IntroPageEle} />
                <Route path="/intro/mid" exact component={IntroPageMid} />
                <Route path="/intro/high" exact component={IntroPageHigh} />
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
