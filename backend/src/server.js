const express = require('express');
const cors = require('cors');
const hotelsRouter = require('./routes/hotels');
const bookingsRouter = require('./routes/bookings');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/hotels', hotelsRouter);
app.use('/api/book', bookingsRouter);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
