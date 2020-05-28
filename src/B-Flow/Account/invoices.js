import React from "react";
import { Link } from "react-router-dom"

const Invoices = () => {

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-3">
                    <h4>Billing Details</h4>
                    <div className="card">

                        <div className="card-body">
                            <Link to="/navbar/billingDetails"><a className="nav-link" href="#">Payment Details</a>
                            </Link>
                            <br />
                            <a className="nav-link" href="#">Invoices</a>
                            <br />
                            <a className="nav-link" href="#">Subscriptions</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Invoices;