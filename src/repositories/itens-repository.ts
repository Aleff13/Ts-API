import Item from "../models/item";
import database from "./db";

const itensRepository = {
    getAll: (callback: (itens: Item[]) => void) => {
        const sql = 'SELECT * FROM itens';
        const params: any[] = []
        database.all(sql, params, (err, rows) => callback(rows))
    },

    createItem: (item: Item, callback: (id?: number) => void) => {
        const sql = 'INSERT INTO itens (nome, descricao, preco) VALUES (?, ?, ?)'
        const params = [item.nome, item.descricao, item.preco]
        database.run(sql, params, function (err){
            callback(this?.lastID)
        })
    },

    findById: (id: number, callback: (item: Item) => void) => {
        const sql = 'SELECT * FROM itens WHERE id = ?'
        const params = [id]
        database.get(sql, params, (err, row) => callback(row))
    },

    deleteById: (id: number, callback: (err: any) => void) => {
        const sql = 'DELETE FROM itens WHERE id = ?'
        const params = [id]
        database.run(sql, params, (err) => callback(err))
    },

    updateById: (item: Item, callback: (id?: number) => void) => {
        const sql = 'UPDATE itens SET nome = ?, descricao = ?, preco = ? WHERE id = ? '
        const params = [item.nome, item.descricao, item.preco, item.id]
        database.run(sql, params, function (err){
            callback(this?.lastID)
        })
    }
}

export default itensRepository