const { Router } = require('express');
const router = Router();
const mysqlConnection = require('../Server/conexion');
const bodyparser = require('body-parser');
router.use(bodyparser.json());


router.get('/Consumibles', function (request, res) { 
    const stringQry =`
        SELECT * From reg_cosumible`
    mysqlConnection.query(stringQry, function (error, results, fields) {
     if (error) throw error;
         res.json(results)
     }); 
   
  });


router.get('/Sucursales', function (request, res) { 
    const stringQry =`
        SELECT count(ID) as "Cantidad de registros: " From reg_cosumible`
    mysqlConnection.query(stringQry, function (error, results, fields) {
     if (error) throw error;
         res.json(results)
     }); 
   
  });

  router.get('/Sucursales/:ID', function (request, res) { 
    const stringQry =`
        SELECT count(ID) as "Cantidad de registros: ", Archivo From reg_cosumible
        Group By Archivo
        `
    mysqlConnection.query(stringQry, function (error, results, fields) {
     if (error) throw error;
         res.json(results)
     }); 
   
  });



module.exports = router;