import React, { useState } from 'react';
import axios from 'axios';
//import logo from './logo.svg';
//import './App.css';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/cadastro', {
        nome,
        email,
        senha,
      }); // Substitua pela URL correta do seu backend
      console.log(response.data.message); // Exibir a mensagem recebida do backend no console
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  return (
    <div>
      <h2>Criar Conta</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        <button type="submit">Criar Conta</button>
      </form>
    </div>
  );
}

export default Cadastro;
