const express = require('express');
const { appRouter } = require('./routes');

const app = express();

app.use(express.json());
app.use(appRouter);

let port = parseInt(process.argv[2], 10);
port = Number.isNaN(port) ? 3000 : port;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
