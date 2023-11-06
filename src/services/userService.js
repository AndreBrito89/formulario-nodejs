import { DatabasePostgres } from '../../database-postgres.js';

const database = new DatabasePostgres();

export const createUser = async ({ name, email, password}) => {
  return database.create({
    name,
    email,
    password,
  });
};

export const listUsers = async (search) => {
  return database.list(search);
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