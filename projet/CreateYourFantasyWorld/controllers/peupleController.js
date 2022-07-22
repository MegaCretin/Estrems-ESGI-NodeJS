// Import de Express Validator check
const { validationResult } = require('express-validator/check');

// Creation d'une variable modele de données
const model = require('../models/peupleModel');


// Récuperation de la liste des peuples
exports.getPeuples = (req, res, next) => {
    //récuperation des données a partir du modèle
    model.find()
    .then(peuples => {
      res
        //code de succès (200)
        .status(200)
        // Affichage du json
        .json({ message: 'Peuples récuperés.', peuples: peuples });
    })
    // Traitement des erreurs
    .catch(err => {
      if (!err.statusCode) {
        // Code d'erreur (500)
        err.statusCode = 500;
      }
    });
};

// Récuperation d'un peuple avec l'id
exports.getPeupleById  = (req, res, next) => {
    //récuperation des données a partir du modèle et de l'id
    model.findById(req.params.peupleId)
      .then(peuple => {
        // Code de succès (200)
        res.status(200)
        // Affichage du json
        .json({ message: 'Peuple récuperé.', peuple: peuple });
      })
      // Traitement des erreurs
      .catch(err => {
        if (!err.statusCode) {
          // Code d'erreur (500)
          err.statusCode = 500;
        }
      });
};

// Ajout d'un peuple
exports.postPeuple = (req, res, next) => {
  console.log(req);
    //creation d'un nouveau peuple partir des parametre de requêtes
    const newPeuple = new model({
        // Id du nouveau peuple
        id: req.body.id,
        // Libelle du nouveau peuple
        libelle: req.body.libelle,
        // Race du nouveau peuple
        race: req.body.race,
        // Nombre d'habitant du nouveau peuple
        nbHabitant: req.body.nbHabitant,
        // Fondateur du nouveau peuple
        fondateur: req.body.fondateur,
        // Description du nouveau peuple
        description: req.body.description,
    });
    newPeuple
      .save()
      .then(result => {
        //code de succès (création: 201)
        res.status(201)
        .json({
          message: 'Peuple crée',
          newPeuple: result
        });
      })
      // Traitement des erreurs
      .catch(err => {
        if (!err.statusCode) {
            // Code d'erreur (500)
            err.statusCode = 500;
        }
      }); 
}

// Suppression d'un peuple par l'id
exports.delPeupleById = (req, res, next) => {
    const peupleId = req.params.peupleId;
    model.findById(peupleId)
      .then(model => {
        // Suppression du peuple
        return model.findByIdAndRemove(peupleId);
      })
      .then(result => {
        console.log(result);
        // Code de succès (suppression : 203)
        res.status(203)
        .json({ message: 'Peuple supprimé.' });
      })
      // Traitement des erreurs
      .catch(err => {
        if (!err.statusCode) {
            // Code d'erreur (500)
            err.statusCode = 500;
        }
      });
}

// Mis a jour d'un peuple
exports.upPeupleById = (req, res, next) => {

    // Récuperation des données a partir du modèle et de l'id
    model.findById(req.params.peupleId)
      .then(post => {

        // Mise a jour des données (données bruts)
        // Id du peuple
        post.id = req.body.peupleId;
        // Libelle du peuple
        post.libelle = req.body.libelle;
        // Race du peuple
        post.race = req.body.race;
        // Nombre d'habitant du peuple
        post.nbHabitant = req.body.nbHabitant;
        // Fondateur du peuple
        post.fondateur = req.body.fondateur;
        // Description du peuple
        post.description = req.body.description;

        return post.save();
      })
      .then(result => {
        // Code de succès (mis a jour : 202)
        res.status(202)
        .json({ 
            message: 'Mise a jour du peuple effectué.', 
            post: result 
         });
      })
       // Traitement des erreurs
      .catch(err => {
        if (!err.statusCode) {
          // Code d'erreur (500)
          err.statusCode = 500;
        }
      });
}