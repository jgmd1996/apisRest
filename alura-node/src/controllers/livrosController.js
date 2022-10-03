import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
        res.status(200).json(livros)
    })
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;
    
        livros.findById(id, (err, livros) => {
          if(err) {
            res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
          } else {
            res.status(200).send(livros);
          }
        })
      }

    static cadastrarLivro = (req, res) => {

        let livro = new livros(req.body);

        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falaha ao cadastra livro.`})
            }else{
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarLivro = (req, res) => {
        let livro = new livros(req.body);
    
        livro.save((err) => {
    
          if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
          } else {
            res.status(201).send(livro.toJSON())
          }
        })
      }

}

export default LivroController;