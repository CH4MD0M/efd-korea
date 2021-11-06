import { Route, Switch } from "react-router";

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
import NotFound from "./pages/NotFound";

// Css
import "./App.css";

function App() {
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
                <Route path="/*" component={NotFound} />
            </Switch>
        </Layout>
    );
}

export default App;
