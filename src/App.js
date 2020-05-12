import React, { Component } from 'react';
import './App.css';
import LogIn from './B-Flow/Login/Login.js';
import NavBar from './B-Flow/Home/Header/Navbar.js';
// import NavBar from './B-Flow/Home/Header/Navbar.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component{

  render(){
    
    return(
      <BrowserRouter>
      <div className='App'>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/navbar" component={NavBar} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;