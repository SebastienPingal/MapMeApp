import express, { application, request, response } from 'express';
import { MapController } from './back/app.controller';
import path from 'path';

const app = express();

app.listen(1234, () => {
    console.log("listening on port 1234");
})

// app.get('/', function(req, res) {
//     res.send('hello world');
// });

app.get('/route', MapController.askRoute);