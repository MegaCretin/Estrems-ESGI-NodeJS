// Import et utilisation de mongoDB schema (modele de données)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Modéle de données des peuples présent sur la base
const peupleSchema = new Schema(
  {
    // Id du peuple
    id: {
      type: Number,
      required: true
    },
    // Nom du peuple
    libelle: {
      type: String,
      required: true
    },
    // Race des habitants
    race: {
      type: String,
      required: true
    },
    // Nombre d'habitants
    nbHabitant: {
      type: Number,
      required: true
    },
    // Createur du peuple
    fondateur: {
      type: String,
      required: true
    },
    // Description du peuple
    description: {
        type: String,
        required: true
    }
},
  { timestamps: true }
);

//export du model
module.exports = mongoose.model('Post', peupleSchema);