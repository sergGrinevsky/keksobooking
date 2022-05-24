// Модуль утилитарных функций

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

// Функция для получения случайного элемента массива
function getElementOfArray (array) {
  return array[getRandomIntInclusive(0, array.length - 1)];
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

// Нужно экспортировать утилитарные функции
export {
  getArrayRandomElements,
  getElementOfArray,
  getRandomIntInclusive,
  getRandomUrl,
  getRandomFloatDecimalFive,
};
