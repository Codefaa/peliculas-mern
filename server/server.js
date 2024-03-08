require('dotenv').config();
const app = require('./app');
const conectarDB = require('./db/mongodb');
const { appConfig, dbConfig } = require('./config')



async function initApp (port, dbConfig) {
    try {
        await conectarDB(dbConfig);
        app.listen(port, () => console.log(`Escuchando el server http://localhost:${appConfig.port}`));
    }
    catch(error) {
        console.error(error);
        process.exit(0);
    }
}

const port = process.env.PORT || appConfig.port;

initApp(port, dbConfig);