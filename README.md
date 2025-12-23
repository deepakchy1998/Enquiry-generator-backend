# Server (MongoDB Atlas configuration)

This project can connect to either a local MongoDB instance (via `DBURL`) or MongoDB Atlas (via `MONGO_URI`).

## Quick setup

1. Copy `.env.example` to `.env` and fill `MONGO_URI` with your Atlas URI. Example:

   MONGO_URI="mongodb+srv://<username>:<password>@userenquries.vszlypy.mongodb.net/<dbname>?retryWrites=true&w=majority"

2. Ensure your Atlas project allows connections from your IP (add via Network Access in Atlas console).

3. Start the server:

   npm start

The server now waits for a successful DB connection before starting. It also supports graceful shutdown on SIGINT/SIGTERM.
