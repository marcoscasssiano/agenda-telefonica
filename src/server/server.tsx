import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from '../database/database';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/cadastro', async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    // Insira os dados na tabela de usuários
    db.run(`INSERT INTO usuarios (nome, email, senha) VALUES ("${nome}", "${email}", "${senha}")`);

    res.json({ message: 'Cadastro realizado com sucesso!' });
    console.log(`cadastro dados nome: ${nome}, email: ${email}, e senha: ${senha},`)
  } catch (error) {
    console.error('Erro no cadastro:', error);
    res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
  }
});


app.get('/api/teste', (req, res) => {
  res.json({ message: 'Resposta do Backend: Sucesso!' });
  console.log("teste")
});

// ...


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
