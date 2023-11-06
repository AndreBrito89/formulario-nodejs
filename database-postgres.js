import { randomUUID } from "node:crypto"
import {sql} from "./db.js"

export class DatabasePostgres {
    //CREATE
    async create(user){ 
        const userID = randomUUID()
        const {name, email, password} = user

        await sql`insert into users (id, name, email, password) 
            VALUES(${userID}, ${name}, ${email}, ${password})`
    }
    //READ
    async list(search) {
        let users
        if(search){
            users = await sql`select * from users where name ilike ${'%'+search+'%'}`
        } else{
            users = await sql`select * from users`
        }
        return users
    }
    //UPDATE
    async update(id, user) {
        const {name, email, password} = user
        await sql`update users set name = ${name}, email = ${email}, password = ${password} WHERE id = ${id}`
    }
    //DELETE
    async delete(id) {
        await sql`delete from users where id = ${id}`
    }
}