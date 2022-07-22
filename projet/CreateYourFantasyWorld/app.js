const express = require('express')
const app = express()
const port = 3000


// Appel de la bibliothèque de MongoDB
const mongoose = require('mongoose');

// Gestion CORS Policy
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Configuration d'une base de donnée MongoDB
mongoose.connect('mongodb+srv://admin:admin1234@nodejs.tmume.mongodb.net/?retryWrites=true&w=majority').then(result => {
    // on dit à app d'écouter le port 8000
    app.listen(8080);
    console.log("[Connecté a la base] écoute sur le port 8080")
  })
  // Message d'erreur en cas d'échec de connection
  .catch(err => console.log(err));