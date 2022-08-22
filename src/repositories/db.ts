import { Console } from 'console';
import sqlite3 from 'sqlite3';

const DBSOURCE = 'db.sqlite'

const SQL_ITENS_CREATE = `
    CREATE TABLE IF NOT EXISTS itens (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        descricao TEXT,
        preco INTEGER
    )
`

const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err)
        throw err;
    } else {
        console.log('Base de dados conectada com sucesso.')
        database.run(SQL_ITENS_CREATE, (err) => {
            if (err) {
                console.error("Não foi possivel criar a base de dados")
            } else {
                console.log('Base de dados criada com sucesso')
            }
        })
    }
});

export default database