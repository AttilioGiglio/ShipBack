import React, { Component } from 'react';

class AskedNumber extends Component {
    render() {
        return (
            <form class="needs-validation">
                <div class="pb-3"></div>
                <label for="formGroupExampleInput">¿Cuál es el número de pedido?</label>
                <input type="text" class="form-control" id="formGroupExampleInput"></input>
                <label for="exampleInputEmail1">Correo electrónico</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <label for="formGroupExampleInput">Teléfono</label>
                <input type="text" class="form-control" id="formGroupExampleInput"></input>
                <div class="pb-3"></div>
                <a href="http://web.whatsapp.com" type="button" class="btn btn-success"><i class="fa fa-whatsapp"></i> ¡Contáctanos por What's App!</a>
                <div class="pb-3"></div>
                <a href="CambioDevolucion" type="button" class="btn btn-primary">Siguiente</a>
            </form>
        );
    }
}
export default AskedNumber;