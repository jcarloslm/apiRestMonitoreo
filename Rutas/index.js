const express = require('express');

const app = express();

app.use(require('./Consumibles/consumibles'));
app.use(require('./Procesar/procesar'));

app.use(require('./HyperFile/Sucursales'));
app.use(require('./HyperFile/Procesar'));
module.exports = app;