
//Dependencias o librerias para levantar APi rest
const odbc = require("odbc")
const express =  require('express');
const morgan =  require('morgan');


//Variables de entorno



const app = express();
app.use(require('../Rutas/index'));


//Middlewares son servicios o intermediarios que se 
//utilizan para monitotizacion, autentificacion, Seguridad, etc.
app.use(morgan('dev'));


///Pruebas de HFSQL
const connectionString = `DSN=fruteria`
app.get("/",async (req, res) => {

    const connection = odbc.connect(connectionString, (error, connect) => {
        connect.query("select Nombre from Empleados", (erorr, result) => {
            if (error) { console.error(error)}
          
            res.json(result)
        })
    })
})








///Le indica que escuche el puerto indicado
app.listen(process.env.PORT,  () => {
    console.log('Servidor puerto: ', process.env.PORT );

});

module.exports = app  