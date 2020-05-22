import React, { useCallback } from "react";
// import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { Context } from "../../store/AppContext.js";
import { withRouter } from "react-router";
import FireBase from "../../FireBase/fireBase.js"

    const SignUp = ({ history }) => {
        const handleSignUp = useCallback(async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          try {
            await FireBase
              .auth()
              .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/login");
          } catch (error) {
            alert(error);
          }
        }, [history]);

//     const { store, actions } = useContext(Context);

//     const[state, setState] = useState({

//         name:"",
//         lastname:"",
//         email:"",
//         password:""
        
//     })


//     const handleSumbit = async (e) => {
//         e.preventDefault();
//         const response = await actions.login(state);
//         if(response.status){
//             props.history.push("/registrarse")
//         }
//     }
    
//     const handleChange = (e) => {
   
//         setState({
//             ...state,
//             [e.target.name] : e.target.value
//         })
//     }


    return (

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
                            <form 
                                // onSubmit={handleSumbit}
                                onSubmit={handleSignUp}
                            >

                                <div className="row justify-content-center">
                                    <div className="col-8">
                                        <input type="text"
                                            placeholder="Ingresa tu Nombre"
                                            name="name"
                                            // onChange={handleChange}
                                            class="form-control" />
                                    </div>
                                </div>
                                <br />

                                <div className="row justify-content-center">
                                    <div className="col-8">
                                        <input type="text"
                                            placeholder="Ingresa tu Apellido"
                                            name="lastname"
                                            // onChange={handleChange}
                                            class="form-control" />
                                    </div>
                                </div>
                                <br />

                                <div className="row justify-content-center">
                                    <div className="col-8">
                                        <input type="email"
                                            placeholder="Ingresa tu Email"
                                            name="email"
                                            // onChange={handleChange}
                                            class="form-control" />
                                    </div>
                                </div>

                                <br />

                                <div className="row justify-content-center">
                                    <div className="col-8">
                                        <input type="password"
                                            placeholder="Ingresa tu password"
                                            minLength="4" 
                                            required
                                            name="password"
                                            // onChange={handleChange}
                                            class="form-control" />
                                    </div>
                                </div>


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

export default withRouter(SignUp);