import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import logo from './logo.svg';
//import './App.css';

function Home() {
  const testBackend = () => {
    // Fazer a requisição quando o botão for clicado
    axios.get('http://localhost:5000/api/teste') // Substitua pela URL correta do seu backend
      .then(response => {
        console.log(response.data.message); // Exibir a mensagem recebida do backend no console
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
      });
  };

  return (
    <div>
      <h1>Lista Telefônica</h1>
      <Link to="/login">Ir para a Página de Login</Link>
      <br />
      <Link to="/cadastro">Ir para a Página de Cadastro</Link>
      <br />
      <button onClick={testBackend}>Testar Backend</button>
    </div>
  );

}

export default Home;
