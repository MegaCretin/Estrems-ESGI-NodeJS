import bodyParser from 'body-parser';
import { Mongo } from 'meteor/mongo'
import { listePeuples } from './main';

WebApp.connectHandlers.use(bodyParser.json());
WebApp.connectHandlers.use('/peuple/create', (req, res, next) => {
    if (req.method === 'POST'){

        if (!listePeuples.find(peuple => peuple.libelle === req.body.libelle)){
            listePeuples.push('{ "libelle": "'+ req.body.libelle +'", "race": "'+ req.body.race + '"}');
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(listePeuples));
        }

    } else {
        res.writeHead(400);
        res.end('Cette méthode HTTP n\'est pas supportée');
    } 
});