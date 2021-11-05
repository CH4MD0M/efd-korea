import { Redirect, Route, Switch } from "react-router";

import Layout from "./components/Layout/Layout";
import MainPage from "./pages/Main/MainPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import Customer from "./pages/Customer/Customer";
import MetaClass from "./pages/MetaClass/MetaClass";

// Css
import "./App.css";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/main" />
                </Route>
                <Route path="/main">
                    <MainPage />
                </Route>
                <Route path="/info/:grade" exact>
                    <DetailPage />
                </Route>
                <Route path="/intro/:grade" exact>
                    <DetailPage />
                </Route>
                <Route path="/customer">
                    <Customer />
                </Route>
                <Route path="/meta-class">
                    <MetaClass />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
