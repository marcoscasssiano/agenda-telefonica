import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import ListaTelefonica from './components/ListaTelefonica';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/lista-telefonica" element={<ListaTelefonica />} />
      </Routes>
    </Router>
  );
}

export default App;
