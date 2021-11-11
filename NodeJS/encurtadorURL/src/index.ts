import express, { Request, Response, NextFunction } from 'express';
import { json } from 'stream/consumers';
import UrlController from './controllers/url.controller';
import { MongoConenction } from './database/mongoconnection';

const api = express();
api.use(express.json());

const database = new MongoConenction();
database.connect();

const urlController = new UrlController();

api.post('/shortner', urlController.shortner);
api.get('/:hash', urlController.redirect);

api.listen(5000, ()=>console.log('Servidor rodando...'));