import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

const productos = [
  { id: 1, nombre: 'Laptop', precio: 1200 },
  { id: 2, nombre: 'Mouse', precio: 25 },
  { id: 3, nombre: 'Teclado', precio: 45 },
  { id: 4, nombre: 'Monitor', precio: 300 },
]
app.get('/api/productos', (req, res) => {
  res.json(productos)
})

app.post('/api/productos', (req, res) => {
  const { nombre, precio } = req.body
  const nuevo = { id: productos.length + 1, nombre, precio }
  productos.push(nuevo)
  res.status(201).json(nuevo)
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
