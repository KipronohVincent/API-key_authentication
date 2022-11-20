const express = require('express');
const app = express();
const port = 4000;
const API = require('./apiAuth');

// Get initial data for users and countries
const { users, Countries } = require('./initialData');
//handle json body request
app.use(express.json());

app.get('/', (req, res) => {
  //home page
  res.status(200).send({ data: { message: 'You can get list of countires at /api/country.' } });
});