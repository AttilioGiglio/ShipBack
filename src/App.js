import React, { Component } from 'react';
import './App.css';

import injectContext from "./store/AppContext";

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LogIn from './B-Flow/Login/Login.js';
import NavBar from './B-Flow/Home/Header/Navbar.js';
import Home from "./views/home";
import Registrarse from './views/registrarse';
import CambioDevolucion from "./views/cambioDevolucion";
import AskedNumber from './views_client_petition/First_step.js';
import QuestType from './views_client_petition/Second_step.js';
import Change from './views_client_petition/Change.js';
import Return from './views_client_petition/Return.js';
import Review from './views_client_petition/Review.js';
import Sent from './views_client_petition/Sent.js';


// import NavBar from './B-Flow/Home/Header/Navbar.js'



class App extends Component{

  render(){
    
    return(
      <BrowserRouter>
      <div className='App'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cambioDevolucion" component={CambioDevolucion}/>
        <Route exact path="/registrarse" component={Registrarse} />
        <Route exact path="/navbar" component={NavBar} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/petitions_1" component={AskedNumber} />
        <Route exact path="/petitions_2" component={QuestType} />
        <Route exact path="/petitions_3/" component={Change} />
        <Route exact path="/petitions_4/" component={Return} />
        <Route exact path="/petitions_5" component={Review} />
        <Route exact path="/petition_sent" component={Sent} />
        <Route render={() => <h1>Not found!</h1>} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default injectContext(App);