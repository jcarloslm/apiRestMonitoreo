const express =  require('express');

const odbc = require("odbc")
const app = express();

const connectionString = `DSN=fruteria`

app.get("/ProcesarREPXML_ArchivoPV",async (req, res) => {

    const connection = odbc.connect(connectionString, (error, connect) => {
        connect.query(`
        SELECT 
        REPXML_ArchivoPV.Archivo,
        count(archivo) AS "Procesados" 
        from REPXML_ArchivoPV
        group by REPXML_ArchivoPV.Archivo
        ORDER by "Procesados" DESC`, (erorr, result) => {
            if (error) { console.error(error)}
          
            res.json(result)
        })
    })
})


module.exports = app  