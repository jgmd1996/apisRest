import express from "express";
import db from "../config/dbConnect"

db.on("erro",console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})

const app = express();

app.use(express.json());

const livros = [
    {id: 1, "titulo": "Senhor dos aneis",},
    {id: 2, "titulo": "O Hobiit",}
];

app.get('/', (req,res) => {
    res.status(200).send('Curso de node')
});

app.get('/livros/:id', (req,res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
});

app.get('/livros', (req,res) => {
    res.status(200).json(livros)
});

app.post('/livros', (req,res) => {
    livros.push(req.body);
    res.status(201).send('LIvros foi cadastrado com sucesso');
});

app.put('/livros/:id', (req,res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
});

app.delete('/livros/:id', (req,res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1)
    res.send(`Livro ${id} removido com sucesso`);
});

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}


export default app;