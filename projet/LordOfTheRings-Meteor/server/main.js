import '../both/main';
import './hero';
import './peuple';
import url from 'url';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import bodyParser from 'body-parser';

/*
    Méthode pour envoyer des données à l'api
    - Query Params: /exemple?monQueryParam=maValeur
    - Path Params: /exemple/maValeur
    - Les deux: /exemple/maValeur?monQueryParam=maValeur

*/

export const listePeuples = new Array();

// Test et Exemple
WebApp.connectHandlers.use(bodyParser.json());
WebApp.connectHandlers.use('/exemple', (req, res, next) => {
    if (req.method == 'GET'){
        const queryParams = url.parse(req.url, true).query;
        console.log("Query Params = ", queryParams.monQueryParam);

        const urlWithoutQueryParams = req.url.split('?')[0];
        const firstPathParam = urlWithoutQueryParams.split('/')[1];
        console.log("Path Params = ", firstPathParam);

        console.log("/exemple fonctionne");
        res.writeHead(200);
        res.end('c\'est moi');
    } else if (req.method === 'POST'){

        console.log(req.body);

        console.log("/exemple fonctionne");
        res.writeHead(200);
        res.end('c\'est moi');
    } else {
        res.writeHead(400);
        res.end('Cette méthode HTTP n\'est pas supportée');
    } 
});
