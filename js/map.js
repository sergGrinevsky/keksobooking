import {address, enableForm, enableFilter} from './form.js';
import { createObject } from './data.js';
import { renderCard } from './render.js';

const map = L.map('map-canvas')
  .on('load', () => {
    enableForm();
    enableFilter();
    address.value = '35.68172 139.75392';
  })
  .setView([
    35.68172,
    139.75392
  ], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const marker = L.marker(
  [
    35.68172,
    139.75392,
  ],
  {
    draggable: true,
    icon: mainPinIcon,
  }
).addTo(map);

marker.on('moveend', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)} ${evt.target.getLatLng().lng.toFixed(5)}`;
});

const declarations = createObject();

declarations.forEach(({location}, index) => {
  L.marker(
    [
      location.x,
      location.y,
    ],
    {
      draggable: false,
      icon: pinIcon,
    }
  )
    .addTo(map)
    .bindPopup(renderCard(declarations[index]));
});
