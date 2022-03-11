const { Router } = require('express');
const { fallbackRouter } = require('./fallback');
const { validate } = require('../validation');
const { getAll, saveItem } = require('../database');

const appRouter = Router();

appRouter.get('/data', async (req, res) => {
  const allItems = await getAll();

  res.json(allItems);
});

appRouter.post('/', async (req, res) => {
  const isValid = validate(req.body);

  if (isValid) {
    await saveItem(req.body);

    res.status(201).json({ isSuccess: true });
  } else {
    res.status(400).json({ isSuccess: false, errors: validate.errors });
  }
});

appRouter.use(fallbackRouter);

module.exports = { appRouter };
