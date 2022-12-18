import express from 'express';
import { BookType } from '../models/book';
import BookRepository from '../repositories/bookRepository'

const Router = express.Router();

Router.get('/doc', (req, res) => {
    res.send(
'<style> table.GeneratedTable { width: 100%; background-color: #ffffff; border-collapse: collapse; border-width: 2px; border-color: #cfcfcf; border-style: solid; color: #000000; } table.GeneratedTable td, table.GeneratedTable th { border-width: 2px; border-color: #cfcfcf; border-style: solid; padding: 3px; } table.GeneratedTable thead { background-color: #d08c3e; } </style> <table class="GeneratedTable"> <thead> <tr> <th>Type</th> <th>Route</th> <th>Body</th> </tr> </thead> <tbody> <tr> <td>GET</td> <td>/api/itens</td> <td>null</td> </tr> <tr> <td>GET</td> <td>/api/item/{id}</td> <td>null</td> </tr> <tr> <td>POST</td> <td>/api/itens</td> <td> <code> { "nome": "Lamborghini Aventator", <br> "descricao": "It has all the standard features of the Aventador S and SVJ. It produces a maximum output of 780 PS (574 kW; 769 hp) and the same 720 N⋅m (531 lb⋅ft) of torque as the Aventador SVJ. Lamborghini claims that it can accelerate from 0–100 km/h (0–62 mph) in 2.8 seconds. The top speed is claimed to be 356 km/h (221 mph).", <br> "preco" : 1000 <br>}, </code></td> </tr> <tr> <td>PUT</td> <td>/api/itens</td> <td> <code> { "id": 3, <br> "nome": "Lamborghini Aventator", <br> "descricao": "It has all the standard features of the Aventador S and SVJ. It produces a maximum output of 780 PS (574 kW; 769 hp) and the same 720 N⋅m (531 lb⋅ft) of torque as the Aventador SVJ. Lamborghini claims that it can accelerate from 0–100 km/h (0–62 mph) in 2.8 seconds. The top speed is claimed to be 356 km/h (221 mph).", <br> "preco" : 1000 <br>}, </code></td> </tr><td>DELETE</td> <td>/api/item/{id}</td> <td>null</td></tbody> </table>'
        )
})

Router.get('/book', async (req, res) => {
    const repo = new BookRepository()
    const result = await repo.getAll()

    return res.json(result).status(200)
})

Router.post('/book', async (req, res) => {
    const {title, author} = req.body
    const book: BookType = {
        title,
        author
    }

    const repo = new BookRepository()
    const result = await repo.createBook(book)

    return res.json(result).status(201)
})

Router.delete('/book/:id', async(req, res) => {
    const id = req.params.id
    const repo = new BookRepository()
    const result = await repo.deleteBook(id)

    return res.json(result).status(204)
})

export default Router