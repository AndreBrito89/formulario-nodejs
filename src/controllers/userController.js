import { createUser, listUsers, updateUser, deleteUser } from '../services/userService.js';

export const createUserController = async (request, reply) => {
  const { name, email, password, animais } = request.body;

  const user = await createUser({ name, email, password, animais });

  return user.message ? reply.status(200).send(user) : reply.status(201).send()
};

export const listUsersController = async (request) => {
  const search = request.query.search;

  return listUsers(search);
};

export const updateUserController = async (request, reply) => {
  const UserID = request.params.id;

  const { name, email, password, animais } = request.body;

  await updateUser(UserID, { name, email, password, animais });

  return reply.status(204).send();
};

export const deleteUserController = async (request, reply) => {
  const UserID = request.params.id;

  await deleteUser(UserID);

  return reply.status(204).send();
};