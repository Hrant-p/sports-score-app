import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./container/Dashboard/Dashboard";
import Sports from "./container/Sports/Sports";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile/Profile";

function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <Header />
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/about" component={About} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path={['/sports/', "/sports/:type"]} component={Sports} exact />
          <Route component={NotFound} />
        </Switch>
          <Footer />
      </BrowserRouter>
  );
}

export default App;

