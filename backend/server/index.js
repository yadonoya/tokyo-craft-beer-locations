// const bars = require('../../controller/barsController');
// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000

// app.use(express.json());
// app.use(bars);

// app.get('/', (req, res) => {
    
//     res.send('Hello World');
// })

// app.listen(PORT, () => {
//     console.log(`Server is listening at port ${PORT}`);
// });

const db = require('../db/db');
const PORT = process.env.PORT || 3001;
const { setupServer } = require('./server');
const app = setupServer();

(async () => {
  try{
    await db.migrate.latest();
    app.listen(PORT , () => {
      console.log(`server is listening at http://localhost:${PORT}`);
    });
  } catch(err) {
    console.error(`App failed to start ${err}`);
    process.exit(-1);
  }
})();