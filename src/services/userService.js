import { DatabasePostgres } from '../../database-postgres.js';

const database = new DatabasePostgres();

//CREATE
export const createUser = async ({ name, email, password}) => {
  return database.create({
    name,
    email,
    password,
  });
};
//LIST
export const listUsers = async (search, param) => {
  return database.list(search, param);
};
//UPDATE
export const updateUser = async (UserID, { name, email, password }) => {
  return database.update(UserID, {
    name,
    email,
    password,
  });
};
//DELETE
export const deleteUser = async (UserID) => {
  return database.delete(UserID);
};
//verifica se o email já existe no banco de dados
const duplicateEmailVerification = async () => {
  return listUsers(email, 'email') ? {message: 'email já cadastrado'} : database.create({name, email, password});
};
