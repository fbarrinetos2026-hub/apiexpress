import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

const productos = [ 
  { id: 1, nombre: 'Lapto', precio: 1220 },
   { id: 2, nombre: 'mouse', precio: 25 },
   { id: 3, nombre: 'teclado', precio: 45 },
  { id: 4, nombre: 'moonitor', precio: 300 },
]
 //ruta de inicio con enlace a los array de los prodcutos
app.get('/', (req, res) => {
  res.send(`esta es la ruta de inicio
    <a href="/api/productos">Ver productos</a>
  `)
})
//ruta de la api, para ver todos los produtos
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
