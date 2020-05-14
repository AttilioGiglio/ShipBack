import React, { Component } from 'react';
import './App.css';

import injectContext from "./store/appContext";

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LogIn from './B-Flow/Login/Login.js';
import NavBar from './B-Flow/Home/Header/Navbar.js';
import Home from "./views/home";
import Registrarse from './views/registrarse';
import CambioDevolucion from "./views/cambioDevolucion";
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
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default injectContext(App);