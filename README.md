# Hotel Booking Demo

This project is a very small demo of a hotel booking website. It is intentionally simple but has a backend and frontend kept in separate folders so it can grow over time.

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

The frontend will be available at [http://localhost:3000](http://localhost:3000) and it will talk to the API running on port 4000.
