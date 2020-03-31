const express = require('express');
const helmet = require('helmet');

const db = require('../data/db')

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', async(req, res) => { 
  try {
    const shoutouts = await db('shoutouts')
    const messageOfTheDay = process.env.MOTD || 'Hello World'
    res.status(200).json({ motd: messageOfTheDay, shoutouts })
  }
  catch(err) {
    console.error('\nERROR', err)
    res.status(400).json({ error: 'Cannot retrieve the shoutouts'})
  }
});

server.post('/', (req, res) => {
  Shoutouts.add(req.body)
  .then(shoutout => {
    res.status(201).json(shoutout);
  })
  .catch (error => {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot add the shoutout' });
  });
});

module.exports = server;
