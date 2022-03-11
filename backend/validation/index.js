const Ajv = require('ajv');

const { rootSchema } = require('./scheme');

const validate = new Ajv().compile(rootSchema);

module.exports = { validate };
