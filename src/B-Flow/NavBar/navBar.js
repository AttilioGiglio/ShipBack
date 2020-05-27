import React, { Component } from 'react';
import { Link } from "react-router-dom";


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="row  col-md-3 offset-sm-1">
                    <a className="navbar-brand" href="#">
                        S H I P B A C K
                        </a>
                </div>
                <div className="row  col-sm-2 offset-sm-4">
                    <ul className="navbar-nav">
                        <Link to="/navbar/orders">
                            <li class="nav-item dropdown">
                                <a class="nav-link active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Orders
                            </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/navbar/orders">
                                        <a class="dropdown-item" href="#">All</a>
                                    </Link>
                                    <Link to="/navbar/returns">
                                        <a class="dropdown-item" href="#">Returns</a>
                                    </Link>
                                    <Link to="/navbar/exchange">
                                        <a class="dropdown-item" href="#">Exchanges</a>
                                    </Link>
                                    <Link to="/navbar/createorder">
                                        <a class="dropdown-item" href="#">Create Order</a>
                                    </Link>
                                </div>
                            </li>
                        </Link>
                        <Link to="/navbar/tracking">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    Tracking
                                </a>
                            </li>
                        </Link>
                        <Link to="/navbar/analytics">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    Analytics
                                </a>
                            </li>
                        </Link>
                        <Link to="/navbar/settings">
                            <li class="nav-item dropdown">
                                <a class="nav-link active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Account
                            </a>
                                <div class="dropdown" aria-labelledby="navbarDropdown">
                                    <Link to="/navbar/settings">
                                        <a class="dropdown-item" href="#">Settings</a>
                                    </Link>
                                    <Link to="/navbar/billingdetails">
                                        <a class="dropdown-item" href="#">Billing Details</a>
                                    </Link>
                                    <Link to="/navbar/support">
                                        <a class="dropdown-item" href="#">Support</a>
                                    </Link>
                                    <Link to="/navbar/logout">
                                        <a class="dropdown-item" href="#">Logout</a>
                                    </Link>
                                </div>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav >
        );
    }
}
export default NavBar;