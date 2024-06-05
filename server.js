const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: '',
  port: 
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Ruta para crear un usuario
app.post('/users', (req, res) => {
  const { name, firstname, email } = req.body;
  const query = 'INSERT INTO users (name, firstname ,email) VALUES (?, ?, ?)';
  db.query(query, [name, firstname, email], (err, result) => {
    console.log(db.query)
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Usuario creado');
  });
});

// Ruta para leer todos los usuarios
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Ruta para actualizar un usuario
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, firstname } = req.body;
  const query = 'UPDATE users SET name = ?, email = ?, firstname = ? WHERE id = ?';
  db.query(query, [name, firstname, email, id], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Usuario actualizado');
  });
});

// Ruta para eliminar un usuario
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Usuario eliminado');
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
