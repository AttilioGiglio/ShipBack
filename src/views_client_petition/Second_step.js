import React, { Component } from 'react';

class QuestType extends Component {
    render() {
        return (
            <form>
                <legend class="col-form-label font-weight-bold">Detalles del pedido</legend>
                <legend class="col-form-label">Seleccione los productos que desea cambiar o devolver. Debe elegir al menos 1.</legend>
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
                <fieldset class="form-group">
                    <legend class="col-form-label">¿Desea cambiar o devolver el producto?</legend>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                        <label class="form-check-label" for="gridRadios1" />Cambiar producto
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                        <label class="form-check-label" for="gridRadios1" />Devolver producto
                    </div>
                </fieldset>
                <div class="pb-3"></div>
                <a href="http://web.whatsapp.com" type="button" class="btn btn-success"><i class="fa fa-whatsapp"></i> ¡Contáctanos por What's App!</a>
                <div class="pb-3"></div>
                <a href="petitions_1" type="button" class="btn btn-primary mr-1">Anterior</a>
                <a href="petitions_2" type="button" class="btn btn-primary">Siguiente</a>
            </form>            
        );
    }
}
export default QuestType;