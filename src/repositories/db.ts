import { ExecException } from 'child_process';
import sqlite3 from 'sqlite3';

const DBSOURCE = 'db.sqlite'

const SQL_ITENS_CREATE = `
    CREATE TABLE IF NOT EXISTS capsule (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        time INTEGER
    )
`

const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err)
        throw err;
    } else {
        console.log('Base de dados conectada com sucesso.')
        database.run(SQL_ITENS_CREATE, (err: ExecException) => {
            if (err) {
                console.error("Não foi possivel criar a base de dados")
            } else {
                console.log('Base de dados criada com sucesso')
            }
        })
    }
});

export default database