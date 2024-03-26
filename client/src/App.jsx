import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Accueil from "./components/accueil/Accueil";
import Login from "./components/accueil/login/Login";
import Inscription from "./components/accueil/inscription/Inscription";
import contact from "./components/accueil/contact/contact";
import CustomNavbar from "./components/accueil/CustomNavbar/CustomNavbar";

import VideosPage from "./components/accueil/VideosPage";
function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/login" component={Login} />
          <Route path="/inscription" component={Inscription} />
          <Route path="/contact" component={contact} />
          <Route exact path="/" component={Accueil} />
          <Route path="/videos" component={VideosPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
