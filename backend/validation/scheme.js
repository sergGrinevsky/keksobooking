const authorSchema = {
  type: 'object',
  properties: {
    avatar: { type: 'string' },
  },
  required: ['avatar'],
  additionalProperties: false
};

const offerSchema = {
  type: 'object',
  properties: {
    'title': { type: 'string' },
    'address': { type: 'string' },
    'price': { type: 'integer'},
    'type': { type: 'string' },
    'rooms': { type: 'integer'},
    'guests': { type: 'integer'},
    'checkin': { type: 'string' },
    'checkout': { type: 'string' },
    'features': {
      type: 'array',
      minItems: 1,
      maxItems: 20,
      items: { type: 'string' },
    },
    'description': { type: 'string' },
    'photos': {
      type: 'array',
      minItems: 1,
      maxItems: 20,
      items: { type: 'string' },
    }
  },
  required: [
    'title',
    'address',
    'price',
    'type',
    'rooms',
    'guests',
    'checkin',
    'checkout',
    'features',
    'description',
    'photos',
  ],
  additionalProperties: false
};

const locationSchema = {
  type: 'object',
  properties: {
    'lat': { type: 'number' },
    'lng': { type: 'number' },
  },
  required: ['lat', 'lng'],
  additionalProperties: false
};

const rootSchema = {
  type: 'object',
  properties: {
    author: authorSchema,
    offer: offerSchema,
    location: locationSchema,
  },
  required: ['author', 'offer', 'location'],
  additionalProperties: false,
};

module.exports = { rootSchema };
