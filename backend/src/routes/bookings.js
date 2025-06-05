const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const hotelsFile = path.join(__dirname, '..', '..', 'data', 'hotels.json');
const bookingsFile = path.join(__dirname, '..', '..', 'data', 'bookings.json');

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file));
  } catch (err) {
    return [];
  }
}

function writeJson(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

router.post('/', (req, res) => {
  const { hotelId, name } = req.body;
  if (!hotelId || !name) {
    return res.status(400).json({ message: 'Missing hotelId or name' });
  }
  const hotels = readJson(hotelsFile);
  if (!hotels.find(h => h.id === Number(hotelId))) {
    return res.status(400).json({ message: 'Hotel not found' });
  }
  const bookings = readJson(bookingsFile);
  bookings.push({ id: bookings.length + 1, hotelId: Number(hotelId), name });
  writeJson(bookingsFile, bookings);
  res.json({ message: 'Booking confirmed' });
});

module.exports = router;
