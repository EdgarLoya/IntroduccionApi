const pool = require('../data/config');

const routes = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Bienvenido a Node js Exrpess REST API!!!'
        });
    });
}
