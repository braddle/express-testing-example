import express, { Express, Request, Response } from 'express';
import getSingleBrewery from './brewery/random';

const app = express();
app.get('/', async (req: Request, res: Response) => {
    const brewery = await getSingleBrewery()
    var o2x = require('object-to-xml');
    console.log(brewery)
    console.log("APP")
    res.set('Content-Type', 'text/xml')
    res.send(o2x({brewery: brewery}))
});

module.exports = app;