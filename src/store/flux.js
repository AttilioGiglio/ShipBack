import { METHODS } from "http";
import { setServers } from "dns";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      //todo lo que sea componente form se tiene que validar en el headers del fetch
      //variables para registrarse, declarandolas en el store
      path: "http://localhost:3000",
      name: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      currentPassword: "",
      idUsuario: null,
      allUsers: {},

      //Billing Details
      cardNumber: null,
      cvv: null,
      month: null,
      year: null,

      //invoices
      invoices: {},
      invoice_id: null,
      invoiceDate: new Date(),
      invoiceStatus: null,
      invoiceService: "",
      invoiceAmount: 0,

      //create order
      Dirección: "",
      Comuna: "",
      Ciudad: "",
      Nombre: "",
      IdFactura: "",
      IdDespacho: "",
      Productos: "",
      Correo: "",
      Celular: "",
      id: null,
      allorders: {},


      //Settings
      storeName: "",
      contactName: "",
      companyName: "",
      emailContact: "",
      address: "",
      city: "",

      // variables del pedido
      pedidos: [],
      numeroPedido: null,
      idPedido: null,
      descripcionPedido: {},

      //variables del producto
      productos: {},
      idProducto: 0,
      nombreProducto: "",
      descripcionProducto: {}

    },

    actions: {
      
      handleChange: e => {
        setStore({
          [e.target.name]: e.target.storename,
          [e.target.name]: e.target.contactName,
          [e.target.name]: e.target.companyName,
          [e.target.name]: e.target.contactPhone,
          [e.target.name]: e.target.industry,
          [e.target.name]: e.target.emailContact,
          [e.target.name]: e.target.address,
          [e.target.name]: e.target.city,
        })
      },

      createStoreDetails: (e, history) => {
        e.preventDefault();
        const store = getStore();

        // setStore({

        //   storeName: store.storeName,
        //   contactName: store.contactName,
        //   companyName: store.companyName,
        //   contactPhone: store.contactPhone,
        //   industry: store.industry,
        //   emailContact: store.emailContact,
        //   address: store.address,
        //   city: store.city,
        // })

        fetch("http://127.0.0.1:5000/settings", {
          method: "POST",
          body: JSON.stringify({
            storeName: store.storeName,
            contactName: store.contactName,
            companyName: store.companyName,
            contactPhone: store.contactPhone,
            industry: store.industry,
            emailContact: store.emailContact,
            address: store.address,
            city: store.city
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data);
            setStore({
              storeName: "",
              contactName: "",
              companyName: "",
              contactPhone: "",
              industry: "",
              emailContact: "",
              address: "",
              city: ""

            });
            //redirige a la ruta deseada
            history.push("/settings")
          })

      },

         //     .then(resp => resp.json())
      //     .then(data => {
      //       console.log(data)
      //       if(data.msg){
      //         setStore({
      //           errors: data
      //         })
      //       }
      //       else{
      //         const aut = {
      //           storeName: "",
      //           contactName: "",
      //           companyName: "",
      //           contactPhone: "",
      //           industry: "",
      //           emailContact: "",
      //           address: "",
      //           city: ""
      //         }
      //         localStorage.setItem('auth', JSON.stringify(aut))
      //         setStore({...aut})
      //         //redirige a la ruta deseada
      //         history.push("/settings")
      //       }
      //     })
      // },

      editUser: (history) => {
        const store = getStore();
        setStore({
          Storename: store.Storename,
          contactName: store.contactName,
          companyName: store.companyName,
          emailContact: store.emailContact,
          address: store.address,
          city: store.city
        })

        fetch("reqres.in/api/users" + store.idUsuario, {
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data);
            setStore({
              storeName: "",
              contactName: "",
              companyName: "",
              emailContact: "",
              address: "",
              city: "",
            });
          })

      },


      createUserSettings: (history) => {
        const store = getStore();
        setStore({
          email: store.email,
          firstName: store.firstName,
          lastName: store.lastName,
          newPassword: store.newPassword,
          confirmPassword: store.confirmPassword

        })

        fetch("reqres.in/api/users", {
          method: "POST",
          body: JSON.stringify({
            email: store.email,
            firstName: store.firstName,
            lastName: store.lastName,
            newPassword: store.newPassword,
            confirmPassword: store.confirmPassword
          }),
          headers: {
          
            "Content-Type": "application/json"
          }
        })

          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data);
            setStore({
              email: "",
              firstName: "",
              lastName: "",
              newPassword: "",
              confirmPassword: ""

            })
            getActions().listarUsuarios();
            history.push("/login")
          })
      },

     
      editBillingDetails: (history) => {
        const store = getStore();
        setStore({
          cardNumber: store.cardNumber,
          cvv: store.cvv,
          month: store.month,
          year: store.year
        })
        fetch("reqres.in/api/billingdetails", {
          method: "PUT",
          body: JSON.stringify({
            cardNumber: store.cardNumber,
            cvv: store.cvv,
            month: store.month,
            year: store.year
          }),
          headers: {
            "Content Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data);
            setStore({
              cardNumber: "",
              cvv: "",
              month: null,
              year: null,
            })
            history.push("/billingDetails")
          })
      },

      
      createBillingDetails: (history) => {
        const store = getStore();
        setStore({
          cardNumber: store.cardNumber,
          cvv: store.cvv,
          month: store.month,
          year: store.year
        })
        fetch("reqres.in/api/billingdetails", {
          method: "POST",
          body: JSON.stringify({
            cardNumber: store.cardNumber,
            cvv: store.cvv,
            month: store.month,
            year: store.year
          }),
          headers: {
            "Content Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data);
            setStore({
              cardNumber: null,
              cvv: null,
              month: null,
              year: null
            })
            history.push("/billingDetails")
          })
      },

      // confirmOrder: () => {
      //     fetch(urlapi + '/', {
      //       method: 'POST',
      //       body: JSON.stringify(state)
      //   }).then(response => response.json()).then(posts => {
      //       props.history.push('/orders')
      //   })
      // },

      createOrder: (history) => {
        const store = getStore();
        setStore({
          address: store.address,
          streetAddress: store.streetAddress,
          apartament: store.apartament,
          email: store.email,
          city: store.city,
          recipent: store.recipient,
          orderNumber: store.orderNumber,
          state: store.state,
          phone: store.phone,
          postCode: store.postCode

        })
        fetch("reqres.in/api/orders", {
          method: "POST",
          body: JSON.stringify({
            address: store.address,
            streetAddress: store.streetAddress,
            apartament: store.apartament,
            email: store.email,
            city: store.city,
            recipent: store.recipient,
            orderNumber: store.orderNumber,
            state: store.state,
            phone: store.phone,
            postCode: store.postCode
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data);
            setStore({
              name: "",
              lastname: "",
              email: "",
              city: "",
              state: "",
              postCode: ""
            })
            history.push("/orders")
          })
      },

      createInvoice: (history) => {
        const store = getStore();
        setStore({
          invoice_id: store.invoice_id,
          invoiceDate: store.invoiceDate,
          invoiceStatus: store.invoiceStatus,
          invoiceService: store.invoiceService,
          invoiceAmount: store.invoiceAmount

        })
        fetch("reqres.in/api/invoices", {
          method: "POST",
          body: JSON.stringify({
            invoice_id: store.invoice_id,
            invoiceDate: store.invoiceDate,
            invoiceStatus: store.invoiceStatus,
            invoiceService: store.invoiceService,
            invoiceAmount: store.invoiceAmount
          })
        })
      },


      seleccionarInvoice: (invoice) => {
        const store = getStore();
        console.log(invoice)
        setStore({
          invoice_id: invoice.id,
          invoiceDate: invoice.date,
          invoiceStatus: invoice.status,
          invoiceService: invoice.service,
          invoiceAmount: invoice.amount
        })

      },

      eliminarInvoice: (invoice) => {
        const store = getStore();
        fetch("reqres/api/invoices/" + invoice.id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json()
          })
          .then(function (data) {
            console.log(data);
            getActions().listarInvoices();
          })
      },

      eliminarProducto: (producto) => {
        const store = getStore();
        fetch(store.path + '/api/data_productos/' + producto.id, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(resp => resp.json())
          .then(data => {
            console.log(data)
            getActions().listarProductos();
          })

      },


      

      handleChange: e => {
        e.preventDefault()
        setStore({
          [e.target.name]: e.target.value
        })
      },




      listarPedidos: () => {
        const store = getStore();
        fetch(store.path + "/orders", {
          method: "GET",
          headers: {
            "Content Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data)
            setStore({
              pedidos: data
            })
          })
      },

      listarInvoices: () => {
        const store = getStore();
        fetch("reqres.in/api/invoices", {
          method: "GET",
          headers: {
            "Content Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data);
            setStore({
              invoices: data
            })
          })
      },


      listarUsuarios: () => {
        const store = getStore();

        fetch(store.path + "/api/users", {
          method: "GET",
          headers: {
            "Content Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json()
          })
          .then(function (data) {
            console.log(data);
            setStore({
              allUsers: data
            })
          })
      },

      listarOrdenes: () => {
        const store = getStore();
        fetch("reqres.in/api/ordenes", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data);
            setStore({
              allorders: data
            })
          })


      },


      listarProductos: () => {
        const store = getStore();
        fetch(store.path + "/api/data_productos", {
          method: "GET",
          headers: {
            "Content Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data);
            setStore({
              productos: data
            })
          })

      },



      seleccionarProducto: (producto) => {
        console.log(producto);
        setStore({
          id: producto.id,
          nombreProducto: producto.nombre,
          precioProducto: producto.precio,
          descripcionProducto: producto.descripcionProducto
        })
      },


      seleccionarOrder: (order, id) => {

        console.log(order)
        setStore({

          id: order.id,
          name: order.name,
          lastname: order.lastname,
          email: order.email,
          city: order.city,
          state: order.state,
          postCode: order.postCode,


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
        setStore({
          numeroPedido: store.numeroPedido,
          idPedido: store.idPedido,
          descripcionPedido: store.descripcionPedido

        })
        fetch("reqres.in/api/pedido" + store.idPedido, {
          method: "PUT",
          body: JSON.stringify({
            numeroPedido: store.numeroPedido,
            idPedido: store.idPedido,
            descripcionPedido: store.descripcionPedido
          }),
          headers: {
            "Content Type": "application/json"
          }
        })
          .then(function (response) {
            if (response.ok)
              return response.json();
          })
          .then(function (data) {
            console.log(data);
            setStore({
              idPedido: "",
              numeroPedido: "",
              descripcionPedido: ""
            })
            getActions().listarPedidos();
            history.push("/pedidos")
          })
      },

    }
  }
}
export default getState;