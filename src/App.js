import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import PagesWithLazyLoadings from "./components/PagesWithLazyLoadings/PagesWithLazyLoadings";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path={["/", "/about", "/profile", '/sports/', "/sports/:type"]}
                       component={PagesWithLazyLoadings}
                       exact/>
                <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;

