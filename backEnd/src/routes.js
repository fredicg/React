const express = require('express');

const ongController = require('./controller/ongController');

const incidentController = require('./controller/incidentController');

const profileController = require('./controller/profileController');

const sessionController = require('./controller/sessionController');

const connection = require('./database/connection');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.get('/profile', profileController.find);
routes.delete('/incidents/:id', incidentController.delete);


    module.exports = routes;