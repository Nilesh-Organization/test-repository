const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

const hotelsFile = path.join(__dirname, '..', 'data', 'hotels.json');
const bookingsFile = path.join(__dirname, '..', 'data', 'bookings.json');

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

app.get('/api/hotels', (req, res) => {
  res.json(readJson(hotelsFile));
});

app.post('/api/book', (req, res) => {
  const { hotelId, name } = req.body;
  if (!hotelId || !name) {
    return res.status(400).json({ message: 'Missing hotelId or name' });
  }
  const bookings = readJson(bookingsFile);
  bookings.push({ id: bookings.length + 1, hotelId, name });
  writeJson(bookingsFile, bookings);
  res.json({ message: 'Booking confirmed' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
