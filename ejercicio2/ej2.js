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

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
