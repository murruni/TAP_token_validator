var port = process.env.port || 3000;

// configuracion express de la app
var app = require('./app');

app.listen(port, () => {
    console.log(`servidor corriendo en puerto ${port}`);
});