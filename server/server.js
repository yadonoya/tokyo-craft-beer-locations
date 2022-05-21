const express = require('express');
const barsController = require('../controller/barsController');
const cors = require('cors');


const setupServer = () => {
  const app = express();
  app.use(express.json());

  app.use(
    cors({
      origin : '*',
          methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
          credentials: true
    })
  );

  app.use('/api/bars', barsController);

  return app;
};

module.exports = { setupServer };