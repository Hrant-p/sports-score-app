import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./container/Dashboard/Dashboard";
import Sports from "./container/Sports/Sports";
import Football from "./container/SportCategory/Football/Football";
import Valleyball from "./container/SportCategory/Valleyball/Valleyball";
import About from "./components/About/About";
import Rugby from "./container/SportCategory/Rugby/Rugby";
import Basketball from "./container/SportCategory/Basketball/Basketball";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <Header />
        <Switch>
          <Route path="/" component={Dashboard} exact/>
          <Route path="/sports" component={Sports} exact/>
          <Route path="/sports/football" component={Football} exact/>
          <Route path="/sports/tennis" component={Valleyball} exact/>
          <Route path="/sports/rugby" component={Rugby} exact/>
          <Route path="/sports/basketball" component={Basketball} exact/>
          <Route path="/about" component={About} exact/>
        </Switch>
          <Footer />
      </BrowserRouter>
  );
}

export default App;

