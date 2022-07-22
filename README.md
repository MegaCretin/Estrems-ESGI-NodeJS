# Estrems-ESGI-NodeJS

Les Core Modules:

    - Http -> lancer un serveur web, envoyer requêtes 
    - Https -> lancer un serveur SSL
    - FS
    - Path
    - Os

Pour exécuter le code il faut écrire dans un terminal "node XXXX.js".

Nous allons utiliser le framework Express qui est sur le principe d'un site en MVC.

Objectif de fin de semaine c'est de faire un Backend et Frontend

APIs REST:

    - Méthode Http [GET, POST, PUT, PATCH, DELETE, OPTIONS]
    - Fondamentaux: 
        - Interface uniforme 
        - Interactions sans état 
    - CORS (cross origin resource sharing)


Consigne: 
    - login (logique utilisateur)
    - un crud
    - en lisans les endpoint (comprehension du "thème")
    - upload de fichier
    - validation quand il y a des posts
    - syntaxe moderne d'import


Meteor FrameWork: 

Il est un FrameWork full stack. Il fait partie des framework le plus rapide après express.
 
 - Avantages:
    -> Facilité d'apprentissage 
    -> Communication client/serveur simplifiée
    -> Scalabilité de MongoDB
 - Inconvénients:
    -> Maintenabilité douteuse pour les gros projets
    -> Risque d'effet "boîte noire"
    -> Lourdeur de la librairie (~70 Mo)


endPoint: 
    /hero/create:
        Méthode: POST
        Description: Permet de creer un hero avec mdp
        Body : {
                    "user": "user2",
                    "password": "password2"
                }
    /hero/list:
        Méthode: GET
        Description: Permet d'avoir la liste de tous les héros créés

Abandon du framework Meteor car beaucoup de chose à apprendre.

Donc je suis passer sur Express mais je n'ai pas supprimé mon projet Meteor (projet\LordOfTheRings-Meteor)


Express:

endPoint: 
    /gestion/peuples :
        Méthode: GET
        Description: Renvoie la liste des peuples
    /gestion/peuple/:id :
        Méthode: GET
        Description: Renvoie un peuple grace à l'id
    /gestion/postPeuple :
        Méthode: POST
        Description: Crée un nouveau peuple
        Body {
            "id": 1,
            "libelle": "Gondor",
            "race": "Humain",
            "nbHabitant": 200000,
            "fondateur": "Isildur et Anárion",
            "description": "Puissant royaume humain ayant eu pour capitales successives Osgiliath puis Minas Anor, renommée Minas Tirith"
        }
    /gestion/delPeuple/:id :
        Méthode: POST
        Description: Supprime un peuple grace à l'id
    /gestion/upPeuple/:id :
        Méthode: PUT
        Description: Update du peuple sélectionné grace à l'id
        Body {
            "id": 1,
            "libelle": "Gondor",
            "race": "Humain",
            "nbHabitant": 200000,
            "fondateur": "Isildur et Anárion",
            "description": "Puissant royaume humain ayant eu pour capitales successives Osgiliath puis Minas Anor, renommée Minas Tirith"
        }
