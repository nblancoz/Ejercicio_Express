const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenidos");
});

app.get("/productos", (req, res) => {
    res.send("Listado de Productos")
})

app.post("/productos", (req, res) => {
    res.send("Crear un producto")
})

app.put("/productos", (req, res) => {
    res.send("Actualizar un producto")
})

app.delete("/productos", (req, res) => {
    res.send("Borrar un producto")
})

app.get("/usuarios", (req, res) => {
    res.send("Listado de usuarios")
})

app.post("/usuarios", (req, res) => {
    res.send("Crear usuario")
})

app.put("/usuarios", (req, res) => {
    res.send("Actualizar usuarios")
})

app.delete("/usuarios", (req, res) => {
    res.send("Borrar un usuario")
})

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
