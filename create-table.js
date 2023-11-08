import {sql} from './db.js'


sql `
CREATE TABLE IF NOT EXISTS animais (
    id      TEXT PRIMARY KEY,
    name   TEXT,
    raca     TEXT, 
    idade    INTEGER,
    user_id TEXT, -- Chave estrangeira para a tabela "users"
    FOREIGN KEY (user_id) REFERENCES users(id)
);


`.then(() => {
    console.log('tabela users criada.')
})
// CREATE TABLE IF NOT EXISTS users (
//     id      TEXT PRIMARY KEY,
//     name TEXT,
//     email TEXT,
//     password TEXT
// );