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
    app.get('/users/:idusers', (request, response) =>{
        const idusers = request.params.idusers;

        pool.query('SELECT * FROM users WHERE idusers = ?', idusers, (error, result) =>{
            if (error) throw error;

            response.send(result);
        });
    });
    app.post('/users', (request, response) =>{
        pool.query('INSERT INTO users SET ?', request.body, (error, result) => {

            if(error) throw error;
            response.status(201).send(`User added with ID: ${result.insertId}`);
        });
    });
    app.put('users/:idusers', (request, response) =>{
        const idusers = request.params.idusers;

        pool.query('UPDATE users SET ? WHERE idusers = ?', [request.body, idusers], (error, result) => {
            if (error) throw error;

            response.send('User was updated successfully.');
        });
    });
    app.delete('/users/:idusers', (request, response) => {
        const idusers = request.params.idusers;

        pool.query('DELETE FROM users WHERE idusers = ?', idusers, (error, result) => {
            if(error) throw error;
            response.send('User was deleted')
        });
    });
}

module.exports = routes;
