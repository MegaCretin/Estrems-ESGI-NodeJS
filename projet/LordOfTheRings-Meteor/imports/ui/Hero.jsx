import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

export const Hero = () => {

    const users = useTracker(() => {
        return Meteor.users.find().fetch();
      });

    return (
        <div>
            <h2>Créer votre héro</h2>
            <form>
                <p>Nom: <input type="name" name="name"></input></p>
                <p>Mot de passe: <input type="password" name="password"></input></p>
                <p><input type="submit" value="Register"></input></p>
            </form>

            <h2>Connection a votre héro</h2>
            <form>
                <p>Nom: <input type="name" name="name"></input></p>
                <p>Mot de passe: <input type="password" name="password"></input></p>
                <p><input type="submit" value="Submit"></input></p>
            </form>

            <h2>Liste des héros</h2>
            <ul>{users.map(
                user => <li key={user._id}>{user.username}</li>
            )}</ul>
        </div>
        

        
      );
};

