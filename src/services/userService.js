import { DatabasePostgres } from '../../database-postgres.js';

const database = new DatabasePostgres();

//CREATE
export const createUser = async ({ name, email, password }) => {
  return duplicateEmailVerification(name, email, password)
};
//LIST
export const listUsers = async (search, param) => {

  return await database.list(search, param)
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
const duplicateEmailVerification = async (name, email, password) => {
  const duplicateEmail = await listUsers(email, 'email')
  return duplicateEmail.length > 0 ? { message: 'email já cadastrado' } : database.create({ name, email, password })
};
