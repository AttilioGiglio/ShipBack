import React, {Component} from 'react';
import {Link} from "react-router-dom"

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
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    Ordenes <span className="sr-only">(current)</span>
                                </a>
                            </li>

                          <Link className="navbar-brand" to="/first_step"><li className="nav-item active">
                                <a className="nav-link" href="#">
                                    Cambio/Devolucion
                                </a>
                            </li>
                            </Link>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    Tracking
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    Analytics
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    Account
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            );
        }
    }
export default NavBar;