
//Pasta server 

import app from "./src/app.js";

const port = process.send.PORT || 3000;



app.listen(port, () => {
    console.log(`servidor escutando em http//localHost:${port}`);
})


// pasta app.js

import express from "express";

const app = express();

const livros = [
    {id: 1, "titulo": "Senhor dos aneis",},
    {id: 2, "titulo": "O Hobiit",}
];

app.get('/', (req,res) => {
    res.status(200).send('Curso de node')
});

app.get('/livros', (req,res) => {
    res.status(200).json(livros)
});

export default app;


// pasta  json apenas uma alteraçao 
//"type": "module",




// foi feito a conexao com o express


