// Модуль данных

// Нужно импортировать утилитарные функции
import {
  getArrayRandomElements,
  getElementOfArray,
  getRandomIntInclusive,
  getRandomUrl,
  getRandomFloatDecimalFive,
} from './util.js';

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const TITLES = [
  'Райский уголок',
  'Удачная покупка',
  'У тёти Лиды',
  'Виноградовка',
];

const DESCRIPTIONS = [
  'Элитный отдых на пляже',
  'Звёздное небо',
  'Лучшие моменты',
  'Зарождение мечты',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const LINKS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

function createObject () {
  const declarations = [];
  for (let i = 0; i < 10; i++) {
    const locationX = getRandomFloatDecimalFive(35.65000, 35.70000);
    const locationY = getRandomFloatDecimalFive(139.70000, 139.80000);
    declarations.push({
      'author': {
        'avatar': getRandomUrl(),
      },
      'offer': {
        title: getElementOfArray(TITLES),
        address: `${locationX}, ${locationY}`,
        price: getRandomIntInclusive(0, 100),
        type: getElementOfArray(TYPES),
        rooms: getRandomIntInclusive(1, 5),
        quests: getRandomIntInclusive(1, 5),
        checkin: getElementOfArray(TIMES),
        checkout: getElementOfArray(TIMES),
        features: getArrayRandomElements(FEATURES),
        description: getElementOfArray(DESCRIPTIONS),
        photos: getArrayRandomElements(LINKS),
      },
      'location': {
        x: locationX,
        y: locationY,
      },
    });
  }
  return declarations;
}


export {createObject};
