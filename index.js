import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

const productos = [ 
  { id: 1, nombre: 'Lapto', precio: 1200 },
   { id: 2, nombre: 'mouse', precio: 25 },
   { id: 3, nombre: 'teclado', precio: 45 },
  { id: 4, nombre: 'moonitor', precio: 300 },
]
//ruta de la api
app.get('/api/productos', (req, res) => {
  res.json(productos)
})
//nuevo prodcuto
app.post('/api/productos', (req, res) => {
  const nombre = req.body.nombre
  const precio = req.body.precio

  const nuevo = {id: productos.length + 1, nombre,precio}
  productos.push(nuevo)
  res.json(nuevo)
})

//lanzando el server
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
