// Import et utilisation de Express Validator
const { body } = require('express-validator/check');

// Import et creation d'un variable routeur de Express
const express = require('express');
const router = express.Router();

// Creation d'une variable controlleur
const controller = require('../controllers/peupleController');

// Récupère la liste de tous les peuples
router.get('/peuples', controller.getPeuples);

// Récupère le peuple grace à l'id
router.get('/peuple/:peupleId', controller.getPeupleById);

// Ajouter un nouveau peuple
router.post('/postPeuple',[
    body('id')
      .trim()
      .isLength({ min: 1 }),
    body('libelle')
      .trim()
      .isLength({ min: 3 }),
    body('race')
      .trim()
      .isLength({ min: 3 }),
    body('nbHabitant')
      .trim()
      .isLength({ min: 0 }),
    body('fondateur')
      .trim()
      .isLength({ min: 3 }),
    body('description')
      .trim()
      .isLength({ min: 0 })
  ], controller.postPeuple);

// Suppression d'un peuple
router.delete('/delPeuple/:peupleId', controller.delPeupleById);

// Mise a jour d'un peuple
router.put('/upPeuple/:peupleId', [
    body('id')
      .trim()
      .isLength({ min: 0 }),
    body('libelle')
      .trim()
      .isLength({ min: 0 }),
    body('race')
      .trim()
      .isLength({ min: 0 }),
    body('nbHabitant')
      .trim()
      .isLength({ min: 0 }),
    body('fondateur')
      .trim()
      .isLength({ min: 0 }),
    body('description')
      .trim()
      .isLength({ min: 0 })
  ], controller.upPeupleById);

// Export du routeur
module.exports = router;