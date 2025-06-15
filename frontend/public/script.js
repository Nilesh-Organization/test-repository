async function loadHotels() {
  const res = await fetch('http://localhost:4000/api/hotels');
  const hotels = await res.json();
  const container = document.getElementById('hotels');
  container.innerHTML = '';
  hotels.forEach(h => {
    const div = document.createElement('div');
    div.className = 'hotel';
    div.innerHTML = `
      <img src="${h.image}" alt="${h.name}">
      <div class="hotel-content">
        <h3>${h.name}</h3>
        <p>${h.location}</p>
        <input type="text" placeholder="Your name" id="name-${h.id}">
        <button onclick="book(${h.id})">Book</button>
      </div>`;
    container.appendChild(div);
  });
}

async function loadBookings() {
  const res = await fetch('http://localhost:4000/api/book');
  const bookings = await res.json();
  const list = document.getElementById('bookings');
  list.innerHTML = '';
  bookings.forEach(b => {
    const div = document.createElement('div');
    div.className = 'booking-item';
    div.textContent = `#${b.id} - Hotel ${b.hotelId} reserved for ${b.name}`;
    list.appendChild(div);
  });
}

async function book(id) {
  const name = document.getElementById('name-' + id).value;
  const res = await fetch('http://localhost:4000/api/book', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ hotelId: id, name })
  });
  const msg = await res.json();
  alert(msg.message);
}

// Load hotels on page load
loadHotels();
