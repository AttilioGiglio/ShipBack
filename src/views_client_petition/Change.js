import React, { Component } from 'react';
import {Link} from "react-router-dom"


class Change extends Component {
    render() {
        return (
            <form>
                <legend class="col-form-label font-weight-bold">Cambio de producto</legend>
                <legend class="col-form-label">Seleccione los productos por los que desea cambiar su pedido actual. Debe elegir al menos 1.</legend>
                <div class="pb-3"></div>
                <table class="table pt-3">
                    <tr>
                        <th scope="col">Número</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Seleccionar</th>
                    </tr>
                    <th scope="row">1</th>
                    <td>Pack x2 Pantalon Buzo de Polar Niño</td>
                    <td>$ 7.990</td>
                    <td><input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" /></td>
                </table>
                <div class="pb-3"></div>

                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Región</option>
                    <option value="1">Arica y Parinacota.</option>
                    <option value="2">Tarapacá.</option>
                    <option value="3">Antofagasta.</option>
                    <option value="4">Atacama.</option>
                    <option value="5">Coquimbo.</option>
                    <option value="6">Valparaíso.</option>
                    <option value="7">Metropolitana de Santiago.</option>
                    <option value="8">Libertador General Bernardo O'Higgins.</option>
                    <option value="9">Maule.</option>
                    <option value="10">Ñuble.</option>
                    <option value="11">Biobío.</option>
                    <option value="12">Araucanía.</option>
                    <option value="13">Ríos.</option>
                    <option value="14">Lagos.</option>
                    <option value="15">Aisén del G. Carlos Ibáñez del Campo.</option>
                    <option value="16">Magallanes y la Antártica Chilena.</option>
                </select>

                <div class="pb-3"></div>

                <label for="formGroupExampleInput">Dirección de despacho</label>
                <input type="text" class="form-control" id="formGroupExampleInput" />

                <label for="formGroupExampleInput">Ciudad de despacho</label>
                <input type="text" class="form-control" id="formGroupExampleInput" />

                <label for="formGroupExampleInput">Comuna de despacho</label>
                <input type="text" class="form-control" id="formGroupExampleInput" />

                <div class="pb-3"></div>
                <a href="http://web.whatsapp.com" type="button" class="btn btn-success"><i class="fa fa-whatsapp"></i> ¡Contáctanos por What's App!</a>
                <div class="pb-3"></div>
            <Link className="navbar-brand" to="/cambioDevolucion">   <a href="petitions_2" type="button" class="btn btn-primary mr-1">Anterior</a>
                <a href="#" type="button" class="btn btn-primary">Siguiente</a>

                </Link>
            </form>            
        );
    }
}
export default Change;