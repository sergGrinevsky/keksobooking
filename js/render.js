import {createObject} from './data.js';
const cards = createObject();

// Блок для отрисовки шаблона (временно)
const mapCanvas = document.querySelector('#map-canvas');

// Шаблон для заполнения
const templateCard = document.querySelector('#card').content;
const popupCard = templateCard.querySelector('.popup');

// Функция для генерации разметки
// function renderCard (card, ) {};


popupCard.querySelector('.popup__title').textContent = cards[0].offer.title;

popupCard.querySelector('.popup__text--address').textContent = cards[0].offer.address;

popupCard.querySelector('.popup__text--price').textContent = `${cards[0].offer.price} ₽/ночь`;

popupCard.querySelector('.popup__type').textContent = getTypeOffer(cards[0].offer.type);
function getTypeOffer (type) {
  switch (type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
  }
}

popupCard.querySelector('.popup__text--capacity').textContent = `${cards[0].offer.rooms} комнаты для ${cards[0].offer.quests} гостей`;

popupCard.querySelector('.popup__text--time').textContent = `Заезд после ${cards[0].offer.checkin}, выезд до ${cards[0].offer.checkout}`;

const popupFeatures = popupCard.querySelector('.popup__features');
getFeaturesOffer(cards[0].offer.features);
function getFeaturesOffer (array) {
  popupFeatures.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const feature = document.createElement('li');
    feature.classList.add('popup__feature');
    feature.classList.add(`popup__feature--${array[i]}`);

    popupFeatures.appendChild(feature);
  }
}

popupCard.querySelector('.popup__description').textContent = cards[0].offer.description;

const popupPhotos = popupCard.querySelector('.popup__photos');
const image = popupPhotos.querySelector('.popup__photo');
getScrImage(cards[0].offer.photos);
function getScrImage (array) {
  popupPhotos.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const img = image.cloneNode(false);
    img.src = array[i];

    popupPhotos.appendChild(img);
  }
}

popupCard.querySelector('.popup__avatar').src = cards[0].author.avatar;

console.log(popupCard.children);

// Отрисуем на странице шаблон
mapCanvas.appendChild(templateCard);
