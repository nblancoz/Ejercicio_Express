const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
const items = [
  { id: 1, nombre: "Taza de Harry Potter", precio: 300 },
  { id: 2, nombre: "FIFA 23 PS5", precio: 1000 },
  { id: 3, nombre: "Figura Goku Super Saiyan", precio: 100 },
  { id: 4, nombre: "Zelda Breath of the Wild", precio: 200 },
  { id: 5, nombre: "Skin Valorant", precio: 120 },
  { id: 6, nombre: "Taza de Star Wars", precio: 220 },
];

app.get("/productos", (req, res) => {
  res.send({ description: "Productos", items });
});

app.post("/productos", (req, res) => {
  const newItem = {
    id: items.length + 1,
    nombre: "Call of duty: Modern Warfare 3",
    precio: 70,
  };
  items.push(newItem);
  res.status(201).send(items);
});

app.put("/productos/:id", (req, res) => {
  const found = items.some((item) => item.id == req.params.id);
  if (found) {
    items.forEach((item) => {
      if (item.id == req.params.id) {
        item.nombre = req.body.nombre;
        item.precio = req.body.precio;
      }
    });
    res.send(items);
  } else {
    res.status(404).send("El producto que quieres actualizar no existe");
  }
});

app.delete("/productos/:id", (req, res) => {
  const found = items.some((item) => item.id == req.params.id);
  if (found) {
    res.send(items.filter((item) => item.id != req.params.id));
  } else {
    res.status(404).send("El producto que quieres eliminar no existe");
  }
});


app.get("/productos/filter", (req, res) => {
    const found = items.some((item) => (item.precio >= 50 && item.precio <= 250))
    if (found) {
        res.send(items.filter((item) => (item.precio >= 50 && item.precio <= 250)))
    } else {
        res.status(404).send("No hay ningún producto con ese precio")
    }
})

app.get("/productos/:precio", (req, res) => {
    const found = items.some((item) => item.precio == req.params.precio)
    if (found) {
        res.send(items.filter((item) => item.precio == req.params.precio))
    } else {
        res.status(404).send("No hay ningún producto con ese precio")
    }
})
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
