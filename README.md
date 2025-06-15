# Hotel Booking Demo

This project is a simple demo of a hotel booking website. The backend and frontend live in separate folders so the architecture can grow over time.

## Folders

- `backend` – Express API server exposing hotel data and booking endpoints
- `frontend` – Static website that calls the API

## Running the demo

Start the backend API:

```bash
cd backend
npm install
npm start
```

In a separate terminal start the frontend server:

```bash
cd frontend
npm install
npm start
```

The frontend will be available at [http://localhost:3000](http://localhost:3000) and talks to the API on port 4000. Hotels load automatically when the page opens. Use the **Show Bookings** button in the header to view your reservations.
