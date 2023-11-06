import { fastify } from 'fastify';
import {
    createUserController,
    listUsersController,
    updateUserController,
    deleteUserController,
  } from './src/controllers/userController.js';


  
  const server = fastify();
  
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
}).then(()=>{
    console.log('listening to port 3333');
});
