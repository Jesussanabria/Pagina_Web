const express = require('express');
const path = require('path');
// const session = require('express-session'); // <-- Esto faltaba
// const sequelize = require('./config/database');
// const User = require('./models/user');
// const authRoutes = require('./routes/auth');
// const bcrypt = require('bcryptjs');

const app = express();
const Port = 3000;

// Configuración de middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(session({ secret:'secret', resave:false, saveUninitialized:true})); // Descomenta si usas sesiones

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rutas para las páginas personales (HTML estático)
// Asegúrate de que los archivos estén en public/html/
app.get('/', (req, res) => { // Ruta raíz, opcionalmente redirige o muestra la página principal
    res.redirect('/home'); // Redirige a /home
    // O, si quieres que la raíz sea directamente la página principal:
    // res.sendFile(path.join(__dirname, 'public', 'html', 'home.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'home.html'));
});

app.get('/cv', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'cv.html'));
});

app.get('/investigacion', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'investigacion.html'));
});

app.get('/ensenanza', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'ensenanza.html'));
});

app.get('/trabajo_campo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'trabajo_campo.html'));
});

// Rutas para la aplicación con autenticación (ejemplo)
// app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'html', 'login.html'));
// });
//
// app.get('/registro', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'html', 'registro.html'));
// });
//
// app.get('/carrito', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'html', 'carrito.html'));
// });
// app.use('/auth', authRoutes); // Descomenta si usas rutas de autenticación

// // Ruta 404 (debe ir al final)
// app.use('*', (req, res) => {
//     res.status(404).send('Página no encontrada');
// });

// Iniciar el servidor
app.listen(Port, () => {
    console.log(`Servidor en http://localhost:${Port}/home`);
});