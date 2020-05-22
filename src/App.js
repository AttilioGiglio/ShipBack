import React, { Component } from 'react';
import './App.css';
import injectContext from "./store/AppContext";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./views/home";
import SignUp from './B-Flow/SignUp/signUp';
import NabBar from './B-Flow/NavBar/navBar.js';
import LogIn from './B-Flow/Login/login.js';
import Orders from './B-Flow/Orders/orders.js';
import Returns from './B-Flow/Orders/returns.js';
import Exchange from './B-Flow/Orders/exchange.js';
import CreateOrder from './B-Flow/Orders/createOrder.js';
import Settings from './B-Flow/Account/setting.js';
import BillingDetails from './B-Flow/Account/billingDetail.js';
import Support from './B-Flow/Account/support.js';
import { LogOut } from './B-Flow/Account/logOut.js';
import Tracking from './B-Flow/Tracking/tracking.js';
import Analytics from './B-Flow/Analytics/analytics.js';
import CambioDevolucion from "./views/cambioDevolucion";
import AskedNumber from './views_client_petition/First_step.js';
import QuestType from './views_client_petition/Second_step.js';
import Change from './views_client_petition/Change.js';
import Return from './views_client_petition/Return.js';
import Review from './views_client_petition/Review.js';
import Sent from './views_client_petition/Sent.js';
import { AuthProvider } from './B-Flow/FBase/authentication.js'




// import NavBar from './B-Flow/Home/Header/Navbar.js'



class App extends Component {

  render() {

    return (
      <AuthProvider>
        <Router>
          <div className='App'>
            <Route exact path="/" component={Home} />
            <Route exact path="/cambioDevolucion" component={CambioDevolucion} />
            <Route exact path="/registrarse" component={SignUp} />
            <Route exact path="/navbar" component={NabBar} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/navbar/orders" component={Orders} />
            <Route exact path="/navbar/returns" component={Returns} />
            <Route exact path="/navbar/exchange" component={Exchange} />
            <Route exact path="/navbar/createorder" component={CreateOrder} />
            <Route exact path="/navbar/settings" component={Settings} />
            <Route exact path="/navbar/billingdetails" component={BillingDetails} />
            <Route exact path="/navbar/support" component={Support} />
            <Route exact path="/navbar/logout" component={LogOut} />
            <Route exact path="/navbar/tracking" component={Tracking} />
            <Route exact path="/navbar/analytics" component={Analytics} />
            <Route exact path="/petitions_1" component={AskedNumber} />
            <Route exact path="/petitions_2" component={QuestType} />
            <Route exact path="/petitions_3/" component={Change} />
            <Route exact path="/petitions_4/" component={Return} />
            <Route exact path="/petitions_5" component={Review} />
            <Route exact path="/petition_sent" component={Sent} />
          </div>
        </Router>
      </AuthProvider>
    );
  }
}

export default injectContext(App);