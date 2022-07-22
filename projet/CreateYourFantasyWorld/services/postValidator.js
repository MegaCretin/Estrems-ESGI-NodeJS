exports.validPost = (id, libelle, race, nbHabitant, fondateur, description) => {
    if(typeof(id) !== 'number' || typeof(libelle) !== '' || race === '' || description === '' || typeof(nbHabitant) !== 'number' || fondateur === ''){
        let valid = false;
        console.log("Valeur non valide dans le form");
    }

    return valid;
}