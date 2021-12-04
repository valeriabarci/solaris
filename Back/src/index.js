const express = require('express');
const http = require('http');
const routesAdministrador = require('./api/routes/AdministradorRoutes.js');
const routesMorador = require('./api/routes/MoradorRoutes.js');
const routesPainelMorador = require('./api/routes/PainelMoradorRoutes.js');
const routesPrefeitura = require('./api/routes/PrefeituraRoutes.js');
const routesSistema = require('./api/routes/SistemaRoutes.js');
const routesPainel = require('./api/routes/PainelRoutes.js');

require('./database/indexDb.js');

const app = express();

app.set('url', 'http://localhost:');
app.set('porta', 3332);

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
