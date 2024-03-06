const mongoose = require('mongoose');

mongoose.connection.on('open', () => console.log('Base de datos conectada'));

async function conectarDB( { host, port, dbName } ) {
    const uri = `mongodb://${host}:${port}/${dbName}`;
    await mongoose.connect(uri);
}

module.exports = conectarDB;