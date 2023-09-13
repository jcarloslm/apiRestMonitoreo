const { Router } = require('express');
const router = Router();
const mysqlConnection = require('../../Server/conexion');
const bodyparser = require('body-parser');
router.use(bodyparser.json());


router.get('/Procesar', function (request, res) { 
    const stringQry =`
    SELECT sucursalesid,archivo,count(archivo)AS Procesado FROM procesar
group by sucursalesid;  `
    mysqlConnection.query(stringQry, function (error, results, fields) {
     if (error) throw error;
         res.json(results)
     }); 
});


   


module.exports = router;