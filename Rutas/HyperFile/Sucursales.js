const express =  require('express');

const odbc = require("odbc")
const app = express();

const connectionString = `DSN=fruteria`

app.get("/Sucursales/:Activo",async (req, res) => {

    const connection = odbc.connect(connectionString, (error, connect) => {
        connect.query(`select 
        Nombre,
        DireccionIP 
        from 
        Sucursales 
        where EsAlmacen = 0 AND
        Sucursales.Activo =`+req.params.Activo, (erorr, result) => {
            if (error) { console.error(error)}
          
            res.json(result)
        })
    })
})

module.exports = app  