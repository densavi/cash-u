// Утилиты для работы с картой

// Создание кастомной иконки (использует map-pin-2.svg)
export const createCustomIcon = (size = [32, 32]) => {
  const { Icon } = require('leaflet');
  
  return new Icon({
    iconUrl: '/images/map-pin-2.svg',
    iconSize: size,
    iconAnchor: [size[0] / 2, size[1]],
    popupAnchor: [0, -size[1]]
  });
};

// Получение координат по клику
export const getCoordinatesFromEvent = (event) => {
  return [event.latlng.lat, event.latlng.lng];
};

// Форматирование координат для отображения
export const formatCoordinates = (lat, lng) => {
  return `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
};

// Проверка, находится ли точка в пределах Украины
export const isInUkraine = (lat, lng) => {
  // Примерные границы Украины
  const ukraineBounds = {
    north: 52.5,
    south: 44.3,
    east: 40.2,
    west: 22.1
  };
  
  return lat >= ukraineBounds.south && 
         lat <= ukraineBounds.north && 
         lng >= ukraineBounds.west && 
         lng <= ukraineBounds.east;
};
