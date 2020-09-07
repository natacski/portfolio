import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import Profile from "./Profile";
import Background from "./Background";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="outsideBox">
        <Header />
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/background" component={Background} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
