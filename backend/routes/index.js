const express = require('express');
const router = express.Router();

router.get('/pikachu', (req, res) => {
  res.send('Pikachu - Power: Thunderbolt');
});

router.get('/charizard', (req, res) => {
  res.send('Charizard - Power: Flamethrower');
});

router.get('/bulbasaur', (req, res) => {
  res.send('Bulbasaur - Power: Vine Whip');
});

router.get('/squirtle', (req, res) => {
  res.send('Squirtle - Power: Water Gun');
});

router.get('/mewtwo', (req, res) => {
  res.send('Mewtwo - Power: Psychic');
});

module.exports = router;