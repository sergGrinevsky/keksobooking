const form = document.querySelector('.ad-form');
const formElements = Array.from(form.children);

const filter = document.querySelector('.map__filters');
const filterElements = Array.from(filter.children);

const type = form.querySelector('#type');
const price = form.querySelector('#price');

const timein = form.querySelector('#timein');
const timeout = form.querySelector('#timeout');

const typeInitialPrice = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

type.addEventListener('change', () => {
  validatePrice();
});

function validatePrice () {
  price.setAttribute('placeholder', typeInitialPrice[type.value]);
  price.setAttribute('min', typeInitialPrice[type.value]);
}

timein.addEventListener('change', () => {
  timeout.value = timein.value;
});

timeout.addEventListener('change', () => {
  timein.value = timeout.value;
});

function disableForm () {
  form.classList.add('ad-form--disabled');
  formElements.forEach((element) => {
    element.disabled = true;
  });
}

function enableForm () {
  form.classList.remove('ad-form--disabled');
  formElements.forEach((element) => {
    element.disabled = false;
  });
}

function disableFilter () {
  filter.classList.add('map__filters--disabled');
  filterElements.forEach((element) => {
    element.disabled = true;
  });
}

function enableFilter () {
  filter.classList.remove('map__filters--disabled');
  filterElements.forEach((element) => {
    element.disabled = false;
  });
}

disableForm();
disableFilter();
/*
Реализуйте с помощью JavaScript перевод страницы в неактивное состояние, все пункты, кроме первого про карту.

Важно. Неактивность должна добавляться именно средствами JavaScript, иначе,
если классы и атрибуты добавить напрямую в HTML, при ошибке в скриптах
или ошибке загрузки скриптов сайт будет недоступен пользователю.

1.1. Неактивное состояние. При открытии страница находится в неактивном состоянии:

  DONE 1. На месте карты отображается серый прямоугольник.

  DONE 2. Форма заполнения информации об объявлении .ad-form содержит класс ad-form--disabled;

  DONE 3. Все интерактивные элементы формы .ad-form должны быть заблокированы
  с помощью атрибута disabled, добавленного на них или на их родительские блоки fieldset;

  DONE 4. Форма с фильтрами .map__filters заблокирована так же,
  как и форма .ad-form — на форму добавлен специальный класс,
  а на её интерактивные элементы атрибуты disabled.
*/
