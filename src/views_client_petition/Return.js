import React, { Component } from 'react';
import {Link} from "react-router-dom"
class Return extends Component {
    render() {
        return (
            <form>
                <div class="pb-3"></div>
                <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect" />Banco
                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Seleccione Banco</option>
                        <optgroup label="Instituciones bancarias.">
                            <option value="BBVA">BBVA.</option>
                            <option value="Desarrollo">Banco del Desarrollo.</option>
                            <option value="Chile_Edwards">Banco Chile/Edwards.</option>
                            <option value="Internacional">Banco Internacional.</option>
                            <option value="Estado">Banco Estado.</option>
                            <option value="Scotiabank">Banco Scotiabank.</option>
                            <option value="Bci">Banco Bci.</option>
                            <option value="do_Brasil">Banco do Brasil S.A.</option>
                            <option value="Corpbanca">Corpbanca.</option>
                            <option value="BICE">Banco BICE.</option>
                            <option value="BSBC">Banco HSBC Bank.</option>
                            <option value="Santander">Banco Santander.</option>
                            <option value="Itau">Banco Itaú.</option>
                            <option value="Security">Banco Security.</option>
                            <option value="Falabella">Banco Falabella.</option>
                            <option value="Ripley">Banco Ripley.</option>
                            <option value="RaboBank">RaboBank.</option>
                            <option value="Consorcio">Banco Consorcio.</option>
                            <option value="Paris">Banco Paris.</option>
                        </optgroup>
                        <optgroup label="Otras instituciones no bancarias.">
                            <option value="Coopeuch">Coopeuch.</option>
                            <option value="Los_Heroes">Caja Los Héroes.</option>
                        </optgroup>
                </select>

                <div class="pb-3"></div>
                <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect" />Tipo de cuenta
                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Seleccione tipo cuenta </option>
                        <option value="Corriente">Cuenta corriente.</option>
                        <option value="Vista">Cuenta vista.</option>
                        <option value="Ahorro">Cuenta de ahorro.</option>
                </select>

                <div class="pb-3"></div>
                <label for="formGroupExampleInput">Número de cuenta</label>
                <input type="text" class="form-control" id="formGroupExampleInput"></input>

                <div class="pb-3"></div>
                <a href="http://web.whatsapp.com" type="button" class="btn btn-success"><i class="fa fa-whatsapp"></i> ¡Contáctanos por What's App!</a>
                <div class="pb-3"></div>
            <Link className="navbar-brand" to="/cambioDevolucion"><a href="petitions_2" type="button" class="btn btn-primary mr-1">Anterior</a>
            </Link>
                <a href="#" type="button" class="btn btn-primary">Siguiente</a>
            </form>            
        );
    }
}
export default Return;