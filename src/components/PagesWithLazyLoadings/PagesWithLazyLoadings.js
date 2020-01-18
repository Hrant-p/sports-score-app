import React, {Fragment, lazy, Suspense} from 'react';
import {Route, Switch, Redirect} from "react-router";
import Spinner from "../Spinner/Spinner";

const Sports = lazy(() => import("../../container/Sports/Sports"));
const Header = lazy(() => import("../Header/Header"));
const About = lazy(() => import("../About/About"));
const Profile = lazy(() => import("../Profile/Profile"));
const Dashboard = lazy(() => import("../Dashboard/Dashboard"));

const PagesWithLazyLoadings = () => {
    return (
        <Fragment>
            <Suspense fallback={<Spinner />}>
                <Header />
                <Switch>
                    <Route path="/" component={Dashboard} exact />
                    <Route path="/about" component={About} exact />
                    <Route path="/profile" component={Profile} exact />
                    <Route path='/sports/' component={() => <Redirect to="/sports/football"/>} exact />
                    <Route path="/sports/:type" component={Sports} exact />
                    <Route path="/sports-score-app/" component={() => <Redirect to="/" />} exact />
                </Switch>
            </Suspense>
        </Fragment>
    );
};

export default PagesWithLazyLoadings;
