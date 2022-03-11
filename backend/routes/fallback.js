const { Router } = require('express');

const fallbackRouter = Router().all('*', (req, res) => {
  res.send([
    'Welcome to keksobooking (mock) api',
    '',
    'GET <a href="/data">/data</a> to fetch all offers',
    'POST / to create new offer',
  ].join('<br>'));
});

module.exports = { fallbackRouter };
