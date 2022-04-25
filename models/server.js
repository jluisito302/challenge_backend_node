const express = require('express');
const cors = require('cors');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.usersRoutePath = '/cities';
        //MIDDLEWARE
        this.middlewares();
        //RUTAS
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        //LECTURA Y PARSEO DE JSON
        this.app.use(express.json());
        //CRAPETA PUBLICA
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usersRoutePath, require('../routes/routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(this.port);
        });
    }
}



module.exports = Server;