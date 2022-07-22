import url from 'url';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import bodyParser from 'body-parser';

WebApp.connectHandlers.use(bodyParser.json());
WebApp.connectHandlers.use('/hero', (req, res, next) => {

    const urlWithoutQueryParams = req.url.split('?')[0];
    const pathParam = urlWithoutQueryParams.split('/')[1];

    if (req.method === 'POST'){
        if (pathParam === "create"){
            if (req.body.user !== null && req.body.password !== null){
                if (!Accounts.findUserByUsername(req.body.user)) {
                    Accounts.createUser({
                    username: req.body.user,
                    password: req.body.password
                    });
                    res.writeHead(200);
                    res.end('[Création utilisateur] - L\'utilisateur ' + req.body.user + ' a été créé avec le MPD (' +  req.body.password + ').');
                } else {
                    res.writeHead(409);
                    res.end('[Création utilisateur] - L\'utilisateur exite déjà.');
                }
            } else {
                res.writeHead(404);
                res.end('[Création utilisateur] - Erreur: Une des valeurs est vide.');
            }
        } 
            // La connexion se fait via "Meteor.loginWithPassword(req.body.user, req.body.password);" mais elle est qu'utilisable dans le Front
        /*else if (pathParam === "login"){
            if (req.body.user !== null && req.body.password !== null){
                if (Accounts.findUserByUsername(req.body.user)) {
                    Meteor.loginWithPassword(req.body.user, req.body.password);
                    res.writeHead(200);
                    res.end('[Connexion utilisateur] - L\'utilisateur ' + req.body.user + ' est connecté avec le MPD (' +  req.body.password + ').');
                } else {
                    res.writeHead(404);
                    res.end('[Connexion utilisateur] - L\'utilisateur n\'exite pas.');
                }
            } else {
                res.writeHead(404);
                res.end('[Connexion utilisateur] - Erreur: Une des valeurs est vide.');
            }
        }*/
    } else if(req.method === 'GET' && pathParam === "list"){
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(Meteor.users.find().fetch()));
        
    } else {
        res.writeHead(400);
        res.end('Cette méthode HTTP n\'est pas supportée');
    } 
});