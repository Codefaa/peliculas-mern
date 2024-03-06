require('dotenv').config();
const app = require('./app');
const conectarDB = require('./db/mongodb');
const { appConfig, dbConfig } = require('./config')



async function initApp (appConfig, dbConfig) {
    try {
        await conectarDB(dbConfig);
        app.listen(appConfig.port, () => console.log(`Escuchando el server http://localhost:${appConfig.port}`));
    }
    catch(error) {
        console.error(error);
        process.exit(0);
    }
}

initApp(appConfig, dbConfig);