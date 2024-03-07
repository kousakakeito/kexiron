
import express, { Express, Request, Response } from 'express';
import path from 'path';

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

const publicPath: string = path.join(__dirname,'..','Public');
app.use(express.static(publicPath));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

import accessKeyController from '../Public/controllers/accessKeyController';
app.use(accessKeyController);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
