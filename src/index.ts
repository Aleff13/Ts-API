import express from 'express'
import cors from 'cors'
import itensRouter from './routes/itens-routes'
import database from './repositories/db'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

// Porta do servidor
const PORT = process.env.PORT || 4000

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'
const CONVERTPORT = process.env.CONVERTPORT || 8000

const db = database;

// App Express
const app = express()


//JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Endpoint raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo!')
})

// Cors
app.use(cors({
    origin: ['http://localhost:3000']
}))

//Rotas
app.use('/api/', itensRouter)

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.status(404)
})
// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})