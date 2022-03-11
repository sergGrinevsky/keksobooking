const fs = require('fs/promises');
const path = require('path');

const dumpFilePath = path.join(__dirname, '.database.json');
const warnKbSize = 100;

const readFromFile = async () => {
  const content = await fs.readFile(dumpFilePath, { flag: 'a+' });

  try {
    return JSON.parse(content.toString('utf8'));
  } catch (error) {
    console.error(error, '\n\n', 'going to rewrite file');

    await fs.writeFile(
      dumpFilePath,
      JSON.stringify([], null, 2),
      { flag: 'a+' },
    );
  }
};

const writeToFile = async (content) => {
  await fs.writeFile(
    dumpFilePath,
    JSON.stringify(content, null, 2),
  );
};

const checkFileSize = async () => {
  const { size } = await fs.stat(dumpFilePath);
  const sizeKb = Math.floor(size / 1024);

  const log = sizeKb > warnKbSize ? console.warn : console.log;

  log(`${dumpFilePath} size is ${sizeKb} kB`);
};

const getAll = () => readFromFile();

const saveItem = async (item) => {
  const existingItems = await readFromFile();

  await writeToFile([...existingItems, item]);
  await checkFileSize();
};

module.exports = { getAll, saveItem };
