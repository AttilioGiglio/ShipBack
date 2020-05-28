import React, {useContext} from 'react';
import { Context } from "../../store/AppContext.js";
import {Link} from "react-router-dom";



const Settings = () => {


    const { store, actions } = useContext(Context);
    return (
        <>
        
            <div className="container mt-5">
                <div className="row">
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
                         <Link to="/navbar/settings/orderStatus"><a className="nav-link" href="#">Notifications</a>
                            </Link>
                            </div>

                           
                        </div>
                    </div>
                
                        <div className="col-9">
                           <div className="container">
                               <div className="card-footer">
                                   
                                   <form action="">
                                   <h3 className="text-center mb-4">Sender Details</h3>
                                    <div className="row">
                                    <div className="col-3">
                                        <label for="" class="form-label">Store Name</label>
                                    </div>
                                    <div className="col-3">
                                        <input type="text" class="form-control" onChange={e=> actions.handleChange(e)}/>
                                    </div>
                                    <div className="col-3">
                                        <label for="" class="form-label">Contact Name</label>
                                    </div>
                                    <div className="col-3">
                                        <input type="text" class="form-control"  onChange={e=> actions.handleChange(e)}></input>
                                    </div>
                                    </div>

                                    <div className="row pt-3">
                                    <div className="col-3">
                                        <label for="" class="form-label">Company Name</label>
                                    </div>
                                    <div className="col-3">
                                        <input type="text" class="form-control" onChange={e=> actions.handleChange(e)}/>
                                    </div>
                                    <div className="col-3">
                                        <label for="" class="form-label">Contact Phone</label>
                                    </div>
                                    <div className="col-3">
                                        <input type="text" class="form-control" onChange={e=> actions.handleChange(e)}></input>
                                    </div>
                                    </div> 

                                    <div className="row pt-3">
                                    <div className="col-3">
                                        <label for="" class="form-label">Industry</label>
                                    </div>
                                    <div className="col-3">
                                        <input type="text" class="form-control" onChange={e=> actions.handleChange(e)}/>
                                    </div>
                                    <div className="col-3">
                                        <label for="" class="form-label">Email Contact</label>
                                    </div>
                                    <div className="col-3">
                                        <input type="text" class="form-control" onChange={e=> actions.handleChange(e)}></input>
                                    </div>
                                    </div> 

                                    <div className="row mt-5 ml-3">
                                        <h3>Pick Up Addresses</h3>
                                    </div>

                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                            <label for="" class="form-label">Address</label>
                                            <input type="text" class="form-control"onChange={e=> actions.handleChange(e)}></input>
                                            </div>
                                        </div>

                                       <div className="col-6">
                                            <div className="form-group">
                                            <label for="" class="form-label">City</label>
                                            <input type="text" class="form-control" onChange={e=> actions.handleChange(e)}></input>
                                            </div>
                                        </div>
                                    </div>
                                  

                                   </form>
                               </div>
                           </div>
                        </div>
                    
               </div>
               
            </div>
                    

        </>
    )
}

export default Settings