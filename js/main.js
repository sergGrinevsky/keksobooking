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

const declarations = [];

// Функция для создания массива случайной длины случайных элементов
function getArrayRandomElements (array) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    if (getRandomIntInclusive(0, 1) === 1) {
      results.push(array[i]);
    }
  }
  return results;
}

// Функция для получения случайного элемента массива (индекса)
function getElementOfArray (array) {
  return getRandomIntInclusive(0, array.length - 1);
}

// Функция для генерации случайного целого числа в диапазоне включительно
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Функция для получения строки содержащей URL адрес случайным образом подставляя значения
function getRandomUrl() {
  let number = getRandomIntInclusive(1,10);
  if (number <= 9) {
    number = `0${number}`;
  }
  return `img/avatars/user${number}.png`;
}

// Функция для генерации случайного числа с плавающей точкой в диапазоне
// и ограниченная 5 знаками после запятой
function getRandomFloatDecimalFive(min, max) {
  return (Math.random() * (max - min) + min).toFixed(5);
}

function createObject () {
  for (let i = 0; i < 10; i++) {
    const locationX = getRandomFloatDecimalFive(35.65000, 35.70000);
    const locationY = getRandomFloatDecimalFive(139.70000, 139.80000);
    declarations.push(
      {
        'author': {
          'avatar': getRandomUrl(),
        },
      },
      {
        'offer': {
          title: TITLES[getElementOfArray(TITLES)],
          address: `${locationX}, ${locationY}`,
          price: getRandomIntInclusive(0, 100),
          type: TYPES[getElementOfArray(TYPES)],
          rooms: getRandomIntInclusive(1, 5),
          quests: getRandomIntInclusive(1, 5),
          checkin: TIMES[getElementOfArray(TIMES)],
          checkout: TIMES[getElementOfArray(TIMES)],
          features: getArrayRandomElements(FEATURES),
          description: DESCRIPTIONS[getElementOfArray(DESCRIPTIONS)],
          photos: getArrayRandomElements(LINKS),
        },
      },
      {
        'location': {
          x: locationX,
          y: locationY,
        },
      });
  }
  return declarations;
}

createObject();
console.log(declarations);
