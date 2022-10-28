import Capsule from "../models/Capsule";
import database from "./db";

const itensRepository = {
    getAll: (callback: (itens: Capsule[]) => void) => {
        const sql = 'SELECT * FROM capsule limit 10';
        const params: any[] = []
        database.all(sql, params, (err, rows) => callback(rows))
    },

    createItem: (item: Capsule, callback: (id?: number) => void) => {
        const sql = 'INSERT INTO capsule (title, description, time) VALUES (?, ?, ?)'
        const params = [item.title, item.description, item.time]
        database.run(sql, params, function (err){
            callback(this?.lastID)
        })
    },

    findById: (id: number, callback: (item: Capsule) => void) => {
        const sql = 'SELECT * FROM capsule WHERE id = ?'
        const params = [id]
        database.get(sql, params, (err, row) => callback(row))
    },

    deleteById: (id: number, callback: (err: any) => void) => {
        const sql = 'DELETE FROM capsule WHERE id = ?'
        const params = [id]
        database.run(sql, params, (err) => callback(err))
    },

    updateById: (item: Capsule, callback: (id?: number) => void) => {
        const sql = 'UPDATE capsule SET title = ?, description = ?, time = ? WHERE id = ? '
        const params = [item.title, item.description, item.time, item.id]
        database.run(sql, params, function (err){
            callback(this?.lastID)
        })
    }
}

export default itensRepository