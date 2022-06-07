const form = document.querySelector('.ad-form');

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

/*  TODO
1. Заведите модуль, который будет отвечать за работу с формой.

2.Опишите в нём код, который реализует логику обработки пользовательского ввода для полей:

2.1 «Тип жилья» — выбор опции меняет атрибуты минимального значения и
плейсхолдера поля «Цена за ночь»;
Поле «Тип жилья» влияет на минимальное значение поля «Цена за ночь»:
  «Бунгало» — минимальная цена за ночь 0;
  «Квартира» — минимальная цена за ночь 1 000;
  «Отель» — минимальная цена за ночь 3 000;
  «Дом» — минимальная цена 5 000;
  «Дворец» — минимальная цена 10 000.

Обратите внимание: вместе с минимальным значением цены нужно изменять и плейсхолдер.

Обратите внимание: ограничение минимальной цены заключается именно в изменении
минимального значения, которое можно ввести в поле с ценой, изменять само значение поля не нужно,
это приведёт к плохому UX (опыту взаимодействия).

Даже если текущее значение не попадает под новые ограничения,
не стоит без ведома пользователя изменять значение поля.

2.2 «Время заезда»,
«Время выезда» — выбор опции одного поля автоматически изменят значение другого.

3. Подключите модуль в проект.
*/
