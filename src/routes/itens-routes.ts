import express from 'express';
import Capsule from '../models/Capsule';
import itensRepository from '../repositories/itens-repository';

const itensRouter = express.Router();

itensRouter.get('/doc', (req, res) => {
    res.send(
'<style> table.GeneratedTable { width: 100%; background-color: #ffffff; border-collapse: collapse; border-width: 2px; border-color: #cfcfcf; border-style: solid; color: #000000; } table.GeneratedTable td, table.GeneratedTable th { border-width: 2px; border-color: #cfcfcf; border-style: solid; padding: 3px; } table.GeneratedTable thead { background-color: #d08c3e; } </style> <table class="GeneratedTable"> <thead> <tr> <th>Type</th> <th>Route</th> <th>Body</th> </tr> </thead> <tbody> <tr> <td>GET</td> <td>/api/itens</td> <td>null</td> </tr> <tr> <td>GET</td> <td>/api/item/{id}</td> <td>null</td> </tr> <tr> <td>POST</td> <td>/api/itens</td> <td> <code> { "nome": "Lamborghini Aventator", <br> "descricao": "It has all the standard features of the Aventador S and SVJ. It produces a maximum output of 780 PS (574 kW; 769 hp) and the same 720 N⋅m (531 lb⋅ft) of torque as the Aventador SVJ. Lamborghini claims that it can accelerate from 0–100 km/h (0–62 mph) in 2.8 seconds. The top speed is claimed to be 356 km/h (221 mph).", <br> "preco" : 1000 <br>}, </code></td> </tr> <tr> <td>PUT</td> <td>/api/itens</td> <td> <code> { "id": 3, <br> "nome": "Lamborghini Aventator", <br> "descricao": "It has all the standard features of the Aventador S and SVJ. It produces a maximum output of 780 PS (574 kW; 769 hp) and the same 720 N⋅m (531 lb⋅ft) of torque as the Aventador SVJ. Lamborghini claims that it can accelerate from 0–100 km/h (0–62 mph) in 2.8 seconds. The top speed is claimed to be 356 km/h (221 mph).", <br> "preco" : 1000 <br>}, </code></td> </tr><td>DELETE</td> <td>/api/item/{id}</td> <td>null</td></tbody> </table>'
        )
})

itensRouter.get('/capsule', (req, res) => {
    itensRepository.getAll((itens) => res.status(200).json(itens))
})

itensRouter.get('/capsule/:id', (req, res) => {
    const id: number = +req.params.id
    itensRepository.findById(id, (item) => {
    
    if(!item){
        res.status(404).json()
        return;
    }
    
    res.status(200).json(item)})
})

itensRouter.delete('/capsule/:id', (req, res) => {
    const id: number = +req.params.id
    itensRepository.deleteById(id, (item) => res.status(204).send(item))
})

itensRouter.post('/capsule', (req, res) => {
    const itens: Capsule[] = req.body
    itens.forEach(item => {
        if (!item.title || !item.description || !item.time) {
            return
        }
        itensRepository.createItem(item, (id) => {
            console.log(id)
        })
    })
    res.status(201).json(itens)
})

itensRouter.put('/capsule', (req, res) => {
    const itens: Capsule[] = req.body
    itens.forEach(item => {
        itensRepository.updateById(item, (id) => {
            console.log(id)
        })
    })
    res.status(200).json(itens)
})

export default itensRouter