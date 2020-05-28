import React from "react";



const OrderStatus = () => {

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-3">
                <h3 className="mb-3">Settings</h3>
               
                <div className="card">
              
                    <div className="card-body">
                        <a className="nav-link" href="#">General</a>
                        <br />
                        <a className="nav-link" href="#">My Profile</a>
                        <br />
                        <a className="nav-link" href="#">Users</a>
                        <br />
                        <a className="nav-link" href="#">Notifications</a>
                        </div>
                    </div>

                </div>
                <div className="col-9">
                    <div className="container">
                        <h3>Notifications</h3>
                        <div className="side">
                            <form>
                            <h5 className="mt-3">Progress Update</h5>
                            <div className="row">
                                
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        


    )
}

export default OrderStatus;

