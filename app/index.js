const PORT = process.env.PORT || 3001;
const GATEWAY_PORT = process.env.GATEWAY_PORT || 3000;
const GATEWAY_HOST = process.env.GATEWAY_HOST || 'localhost';

// configuracion express de la app
var app = require('./app');

app.listen(PORT, () => {
    console.log(`servidor corriendo en puerto ${PORT}`);
});
