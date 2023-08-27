import sqlite3 from 'sqlite3';

const dbPath = '../database/database.db';

const db = new sqlite3.Database(dbPath, err => {
  if (err) {
    console.error('Erro ao abrir o banco de dados:', err.message);
  } else {
    console.log('Conexão com o banco de dados estabelecida.');
  }
});

export default db;
