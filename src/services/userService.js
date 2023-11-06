import { DatabasePostgres } from '../../database-postgres.js';

const database = new DatabasePostgres();

export const createUser = async ({ name, email, password}) => {
if(listUsers(email, 'email')) return {message: 'email já cadastrado'}
  return database.create({
    name,
    email,
    password,
  });
};

export const listUsers = async (search, param) => {
  return database.list(search, param);
};

export const updateUser = async (UserID, { name, email, password }) => {
  return database.update(UserID, {
    name,
    email,
    password,
  });
};

export const deleteUser = async (UserID) => {
  return database.delete(UserID);
};