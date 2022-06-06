import {createObject} from './data.js';
const cards = createObject();

// Блок для отрисовки шаблона (временно)
const mapCanvas = document.querySelector('#map-canvas');

// Шаблон для заполнения
const templateCard = document.querySelector('#card').content.querySelector('.popup');

// Функция для генерации разметки
function renderCard (card) {
  const template = templateCard.cloneNode(true);
  template.querySelector('.popup__title').textContent = card.offer.title;
  template.querySelector('.popup__text--address').textContent = card.offer.address;
  template.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/ночь`;
  template.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.quests} гостей`;
  template.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
  template.querySelector('.popup__description').textContent = card.offer.description;
  template.querySelector('.popup__avatar').src = card.author.avatar;
  template.querySelector('.popup__type').textContent = getTypeOffer(card.offer.type);
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
  const features = template.querySelector('.popup__features');
  getFeaturesOffer(card.offer.features);
  function getFeaturesOffer (array) {
    features.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
      const feature = document.createElement('li');
      feature.classList.add('popup__feature');
      feature.classList.add(`popup__feature--${array[i]}`);

      features.appendChild(feature);
    }
  }
  const photos = template.querySelector('.popup__photos');
  const photo = template.querySelector('.popup__photo');
  getScrImage(card.offer.photos);
  function getScrImage (array) {
    photos.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
      const img = photo.cloneNode(false);
      img.src = array[i];

      photos.appendChild(img);
    }
  }

  return template;
}


// for (let i = 0; i < cards.length; i++) {
//   const declarationCard = renderCard(cards[i]);
//   mapCanvas.appendChild(declarationCard);
// }

// Отрисуем на странице шаблон
const declarationCard = renderCard(cards[0]);
mapCanvas.appendChild(declarationCard);
