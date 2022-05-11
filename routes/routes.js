const pool = require('../data/config');

const routes = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Bienvenido a Node js Exrpess REST API!!!'
        });
    });
    app.get('/users', (request, response) =>{
        pool.query('SELECT * FROM users', (error, result) => {
            if(error) throw error;

            response.send(result);
        });
    });
}
