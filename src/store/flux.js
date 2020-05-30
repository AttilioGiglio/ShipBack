import { METHODS } from "http";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {

            //variables para registrarse, declarandolas en el store
            path:"http://localhost:3000",
            name: "",
            lastname:"",
            email:"",
            password:"",
            idUsuario:null,
            allUsers:{},
        
            //Billing Details
            cardNumber:0,
            cvv:0,
            month: new Date(),
            year: new Date(),
            //invoices
            invoices:{},
            invoice_id:0,
            invoiceDate: new Date(),
            invoiceStatus:false,
            invoiceService:"",
            invoiceAmount:0,
            

            //Settings
            storeName:"",
            contactName:"",
            companyName:"",
            contactPhone:0,
            industry:0,
            emailContact:"",
            address:"",
            city:"",
            // variables del pedido
            pedidos:[],
            numeroPedido:null,
            idPedido:null,
            descripcionPedido:{},
            //variables del producto
            productos:{},
            idProducto:0,
            nombreProducto:"",
            descripcionProducto:{}
          



    },

    actions: {

      createUser: (history) => {
        const store= getStore();
        const data = {
          name: store.name,
          lastname: store.lastname,
          email: store.email,
          password: store.password,
        }

        fetch(store.path + "/api/registrarse",{
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        })

        .then(function(response){
          if(response.ok)
          return response.json();
        })
        .then(function(data){
          console.log(data);
          setStore({
            name: "",
            lastname:"",
            email:"",
            password:"",
            nameCompany:"",
            direction:"",
            city:"",
            phone:"",
            idUsuario:0

          });
          history.push("/users")
        })
      },

      
      handleChange: e => {
        setStore({
            [e.target.name]: e.target.value
        })
    },

    listarPedidos: () =>{
      const store = getStore();
      fetch(store.path + "/api/data_pedidos",{
        method : "GET",
        headers: {
          "Content Type": "application/json"
        }
      })
      .then(function(response){
        if(response.ok)
        return response.json();
      })
      .then(function(data){
        console.log(data)
        setStore({
          pedidos : data
        })
      })
    },


      listarProductos: () => {
        const store = getStore();
        fetch(store.path + "/api/data_productos",{
          method: "GET",
          headers: {
            "Content Type": "application/json"
          }
        })
        .then(function(response){
          if(response.ok)
          return response.json();
        })
        .then(function(data){
          console.log(data);
          setStore({
            productos : data
          })
        })

      },


      seleccionarProducto : (producto) => {
        console.log(producto);
        setStore({
          id: producto.id,
          nombreProducto : producto.nombre,
          precioProducto: producto.precio,
          descripcionProducto: producto.descripcionProducto
        })
      },

      seleccionarPedido: (pedido) => {
        console.log(pedido)
        setStore({
          id: pedido.idPedido,
          numeroPedido: pedido.numeroPedido,
          descripcionPedido: pedido.descripcionPedido
        })
      },


      editarPedido: (history) => {
        const store = getStore();
        const data = {
          numeroPedido : store.nombreProducto,
          idPedido : store.precioProducto,
          descripcionProducto : store.descripcionProducto

        }
        fetch(store.path + "/api/data_productos/" +store.id, {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content Type": "application/json"
          }
        })
        .then(function(response){
          if(response.ok)
          return response.json();
        })
        .then(function(data){
          console.log(data);
          setStore({
            nombreProducto:"",
            precioProducto:"",
            descripcionProducto:""
          })
          getActions().listarProductos();
          history.push("/productos")
        })
      },



    }
  }
}
export default getState;