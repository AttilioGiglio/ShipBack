import React,{useContext} from "react";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";





const Registrarse = () => {
    const {store, actions} = useContext(Context);
    return(

        <div className="container">
        <div className="row justify-content-center mt-2 mb-5">
            <div className="col-6">
                <div className="card">
                    <div className="card-header bg-dark">
                        <h2 className="title text-center text-white">ShipBack</h2>
                        <p className="text-center text-white">Bienvenido</p>
                        <p className="text-center text-white">Por favor, Registrese</p>
                    </div>
                    <div className="card-body">
                        <form action="">

                        <div className="row justify-content-center">
                                <div className="col-8">
                                    <input type="text" placeholder="Ingresa tu Nombre" onChange={e => actions.handleChange(e)} class="form-control" />
                                </div>
                            </div>
                            <br/>

                            <div className="row justify-content-center">
                                <div className="col-8">
                                    <input type="text" placeholder="Ingresa tu Apellido" onChange={e => actions.handleChange(e)} class="form-control" />
                                </div>
                            </div>
                            <br/>

                            <div className="row justify-content-center">
                                <div className="col-8">
                                    <input type="email" placeholder="Ingresa tu Email" onChange={e=> actions.handleChange(e)} class="form-control" />
                                </div>
                            </div>

                            <br />

                            <div className="row justify-content-center">
                                <div className="col-8">
                                    <input type="password" placeholder="Ingresa tu password" onChange={e => actions.handleChange(e)} class="form-control" />
                                </div>
                            </div>

                            <br />

                            <div className="row justify-content-center">
                                <div className="col-8">
                                    <input type="text" placeholder="Ingresa el Nombre de tu Empresa" onChange={e =>actions.handleChange(e)} class="form-control" />
                                </div>
                            </div>

                            <br/>

                            <div className="row justify-content-center">
                                <div className="col-8">
                                    <input type="text" placeholder="Ingresa la Direccion" onChange={e => actions.handleChange(e)} class="form-control" />
                                </div>
                            </div>

                            <br/>

                            <div className="row justify-content-center">
                                <div className="col-8">
                                    <input type="text" placeholder="Ingresa la Ciudad" onChange={e=> actions.handleChange(e)} class="form-control" />
                                </div>
                            </div>

                            <br/>


                                <div className="row justify-content-center">
                                <div className="col-8">
                                    <input type="text" placeholder="Numero Contacto" onChange={e => actions.handleChange(e)} class="form-control" />
                                </div>
                            </div>

                            <br/>

                            
                            <div className="row justify-content-center">
                                <div className="col-8">
                                    <input type="text" placeholder="Tipo de Empresa" onChange={e => actions.handleChange(e)} class="form-control" />
                                </div>
                            </div>

                                <br/>
                         <Link className="navbar brand" to="login"> <button type="submit" class="btn btn-dark btn-lg btn-block">
                             Sign In
                         </button>
                         </Link>
                            

                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>


    )
}

export default Registrarse;