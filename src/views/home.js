import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Home = () => {
    const { store } = useContext(Context);
    return (

        <div className="container">
            <div className="row ">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container ">
                            <a className="navbar-brand" href="#">
                                <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top " alt="" />
                                <h2>ShipBack</h2>
                            </a>


                            <ul className="nav nav-pills justify-content-end">


                                <li className="nav-item">

                                    <a className="nav-link text-white" href="#Clientes">Clientes</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">¿Como Funcionamos?<span className="sr-only">(current)</span></a>
                                </li>

                                <li className="nav-item active" href="#">
                                    <a className="nav-link text-white" href="#">¿Que hacemos?</a>
                                </li>




                                <Link className="navbar-brand" to="/cambioDevolucion">  <li className="nav-item active" href="#">
                                    <a className="nav-link text-white" href="#">Cambio o Devolucion</a>
                                </li>
                                </Link>
                                <div className="row">
                                    <div className="col">
                                        <Link className="navbar-brand" to="/login">  <li className="nav-item active" href="#">
                                            <a className="nav-link text-white" href="#">Iniciar Sesion</a>
                                        </li>
                                        </Link>

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <Link className="navbar-brand" to="/registrarse"><li className="nav-item active" href="#">
                                            <a className="nav-link text-white" href="#">Registrarse</a>
                                        </li>
                                        </Link>
                                    </div>
                                </div>

                            </ul>
                        </div>


                    </nav>

                </div>
            </div>

            <div className="row mt mb-5">
                <div className="col-12">

                    <div className="card bg-dark text-black">
                        <img src="https://via.placeholder.com/500x325" class="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <div className="row mt-5 mb-5">
                                <div className="col-12">
                                    <h5 className="card-title text-center">XXXXXXXXXXXXXXXXXX</h5>
                                </div>
                            </div>
                            <div className="row mt-5 mb-5">
                                <div className="col-12">
                                    <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in
                             to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mt-5 mb-5">
                                    <p className="card-text text-center">Last updated 3 mins ago</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="boton text-center mt-5">
                                        <button type="button" class="btn btn-lg btn-primary">Pruebalo Gratis</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div className="row">
                <div className="col-12">

                    <div className="card pl-4">
                        <div className="card-title mt-5">
                            <h2 className="title">
                                ¿Que hacemos?
                              </h2>
                            <h3 className="pre-title">
                                Estandarizamos tus devoluciones
                                     </h3>
                            <div className="card-body">
                                <p className="lead">
                                    Integramos nuestra plataforma en tu e-commerce y en minutos tendrás la solución para automatizar los flujos de postventa,
                                     pudiendo gestionarlos desde un panel de administración amigable y con reportería en tiempo real.
                                 </p>
                            </div>
                        </div>
                    </div>






                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <div className="card">
                        <div className="card-title text-center mt-5">
                            <h1 className="title">
                                ¿Como funcionaria para mi cliente?
                </h1>
                        </div>
                        <div className="card-body">
                            <div class="card-deck">
                                <div class="card">
                                    <img class="card-img-top" src="http://placehold.it/250x250" class="rounded-circle" alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div class="card">
                                    <img class="card-img-top" src="http://placehold.it/250x250" class="rounded-circle" alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div class="card">
                                    <img class="card-img-top" src="http://placehold.it/250x250" class="rounded-circle" alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


            <div className="footer">
                <div className="py-5 bg-dark">
                    <div className="container">
                        <p className="m-0 text-center text-white"> Copyright © Your Website 2019</p>
                    </div>

                </div>
        </div>
        </div>




            )
        }
        
export default Home;