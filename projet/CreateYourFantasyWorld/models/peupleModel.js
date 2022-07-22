// Import et utilisation de mongoDB schema (modele de données)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Modéle de données des peuples présent sur la base
const peupleSchema = new Schema(
  {
    // Id du peuple
    id: {
      type: int,
      required: true
    },
    // Race des habitants
    race: {
      type: String,
      required: true
    },
    // Nombre d'habitants
    nbHabitant: {
      type: int,
      required: false
    },
    // Createur du peuple
    fondateur: {
      type: String,
      required: false
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