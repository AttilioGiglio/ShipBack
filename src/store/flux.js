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
            nameCompany:"",
            direction:"",
            city:"",
            phone:"",
            idUsuario:0,
            allUsers:{},
            // variables del producto
            pedidos:[],
            productos:{},
            nombreProducto:"",
            precioProducto:0,
            idProducto:0,
            descripcionProducto:"",
          



    },
    actions: {

      createUser: (history) => {
        const store= getStore();
        const data = {
          name: store.name,
          lastname: store.lastname,
          email: store.email,
          password: store.password,
          nameCompany: store.nameCompany,
          direction : store.direction,
          city: store.city,
          phone: store.phone,
          idUsuario: store.idUsuario
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


      editarProducto: (history) => {
        const store = getStore();
        const data = {
          nombreProducto : store.nombreProducto,
          precioProducto : store.precioProducto,
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



      



      
      handleChange: e => {
        setStore({
          [e.target.name]: e.target.value,
          [e.target.lastname]: e.target.value,
          [e.target.email]: e.target.value,
          [e.target.password]: e.target.value,
          [e.target.nameCompany]: e.target.value,
          [e.target.direction]: e.target.value,
          [e.target.city]: e.target.value,
          [e.target.phone]: e.target.value
        })
      }


}
}}


export default getState;