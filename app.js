const express = require("express");
const { randomUUID } = require("crypto");   // Inserção da biblioteca Crypto para a criação de IDs unicas;

const app = express();

app.use(express.json());

const products = [];    // Criação da Array para receber as informações;

app.post("/products", (request, response) =>{
     
const { name, price } = request.body; // Recebimento das informações de nome e preço do produto;

const product = {
    name,
    price,
    id: randomUUID(),
}   // Chamado JSON para a estruturação dos dados;

products.push(product);

return response.json(product);
});


app.get("/products", (request, response) => {
    return response.json(products);
})

app.listen(4002, () => console.log("Servidor esta rodando na rota 4002"));  // Retorno no console para quando o servidor iniciar na rota 4002;
