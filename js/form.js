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

const roomNumbers = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const capacityElements = Array.from(capacity.children);

const typeInitialPrice = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

type.addEventListener('change', () => {
  validatePrice();
});

function validatePrice() {
  price.setAttribute('placeholder', typeInitialPrice[type.value]);
  price.setAttribute('min', typeInitialPrice[type.value]);
}

roomNumbers.addEventListener('change', () => {
  validateRoomsAndQuests();
});

function clearDisable() {
  capacityElements.forEach((item) => {
    item.disabled = false;
  });
}

function validateRoomsAndQuests() {
  if (roomNumbers.value === '1') {
    clearDisable();
    capacity.value = '1';
    capacityElements.forEach((item) => {
      if (item.value !== '1') {
        item.disabled = true;
      }
    });
  }
  if (roomNumbers.value === '2') {
    clearDisable();
    capacity.value = '1';
    capacityElements.forEach((item) => {
      if (item.value !== '1' && item.value !== '2') {
        item.disabled = true;
      }
    });
  }
  if (roomNumbers.value === '3') {
    clearDisable();
    capacity.value = '1';
    capacityElements.forEach((item) => {
      if (item.value !=='3' && item.value !=='2' && item.value !=='1') {
        item.disabled = true;
      }
    });
  }
  if (roomNumbers.value === '100') {
    clearDisable();
    capacity.value = '0';
    capacityElements.forEach((item) => {
      if (item.value !== '0') {
        item.disabled = true;
      }
    });
  }
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

export {address, enableForm, enableFilter, validatePrice, validateRoomsAndQuests};
