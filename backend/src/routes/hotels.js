const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const hotelsFile = path.join(__dirname, '..', '..', 'data', 'hotels.json');

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file));
  } catch (err) {
    return [];
  }
}

router.get('/', (req, res) => {
  res.json(readJson(hotelsFile));
});

module.exports = router;
