const express = require('express');
const express = require('express');
const http = require('http');
const routesAdministrador = require('./src/api/routes/AdministradorRoutes.js');
const routesMorador = require('./src/api/routes/MoradorRoutes.js');
const routesPainelMorador = require('./src/api/routes/PainelMoradorRoutes.js');
const routesPrefeitura = require('./src/api/routes/PrefeituraRoutes.js');
const routesSistema = require('./src/api/routes/SistemaRoutes.js');
const routesPainel = require('./src/api/routes/PainelRoutes.js'); 

require('./src/database/indexDb');

const app = express();

app.set('url', 'http://localhost:');
app.set('porta', 3000);

app.use(express.json());
app.use(routesAdministrador);
app.use(routesMorador);
app.use(routesPainelMorador);
app.use(routesPrefeitura);
app.use(routesSistema);
app.use(routesPainel);

http.createServer(app).listen(app.get('porta'), function() {
    console.log('\nServidor Rodando ' + app.get('url') + app.get('porta'));
});