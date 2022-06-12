const form = document.querySelector('.ad-form');
const formElements = Array.from(form.children);

const filter = document.querySelector('.map__filters');
const filterElements = Array.from(filter.children);

const type = form.querySelector('#type');
const price = form.querySelector('#price');

const timein = form.querySelector('#timein');
const timeout = form.querySelector('#timeout');

const address = form.querySelector('#address');
address.readOnly = true;

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

export {address, enableForm, enableFilter};
