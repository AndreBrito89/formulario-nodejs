import { fastify } from 'fastify';
import {
    createUserController,
    listUsersController,
    updateUserController,
    deleteUserController,
} from './src/controllers/userController.js';



const server = fastify();

server.addHook('onRequest', (request, reply, done) => {
    reply.header('Access-Control-Allow-Origin', '*');
    reply.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS'
    );
    reply.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );

    if (request.method === 'OPTIONS') {
        reply.send();
    } else {
        done();
    }
});


// POST
server.post('/users', createUserController);

// GET
server.get('/users', listUsersController);

// PUT
server.put('/users/:id', updateUserController);

// DELETE
server.delete('/users/:id', deleteUserController);

server.listen({
    port: 3333
}).then(() => {
    console.log('listening to port 3333');
});
