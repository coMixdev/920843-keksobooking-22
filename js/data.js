import { getRandomNum, getFloatNum, getAvatarUrl, getRandomElement, getRandomArrayLength } from './util.js'

const TYPES = ['palace', 'flat', 'house', 'bungalo'];
const TIMES = ['12:00', '13:00', '14:00'];
const NUMBERS_DESCRIPTION = ['Номер класса делюкс с гидромассажной ванной', 'Стандартный номер с общей ванной', 'Номер с видом на сад'];
const OPTIONS = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS_ADRESS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const PRICE_MIN = 1;
const PRICE_MAX = 10000;
const LOCATION_X_FROM = 35.65000;
const LOCATION_X_TO = 35.70000;
const LOCATION_Y_FROM = 139.70000;
const LOCATION_Y_TO = 139.80000;
const FLOAT = 5;
const GUESTS_MIN = 1;
const GUESTS_MAX = 15;
const ROOMS_MIN = 1;
const ROOMS_MAX = 8;

const createAdvertising = () => {

  const locationX = getFloatNum(LOCATION_X_FROM, LOCATION_X_TO, FLOAT);
  const locationY = getFloatNum(LOCATION_Y_FROM, LOCATION_Y_TO, FLOAT);
  return {
    author : {
      avatar: getAvatarUrl(),
    },
    offer : {
      title: 'Самое лучшее предложение',
      adress: `${locationX}, ${locationY}`,
      price: getRandomNum(PRICE_MIN, PRICE_MAX),
      type : getRandomElement(TYPES),
      rooms : getRandomNum(ROOMS_MIN, ROOMS_MAX),
      guests : getRandomNum(GUESTS_MIN, GUESTS_MAX),
      checkin : getRandomElement(TIMES),
      checkout : getRandomElement(TIMES),
      features : getRandomArrayLength(OPTIONS),
      description : getRandomArrayLength(NUMBERS_DESCRIPTION),
      photos : getRandomArrayLength(PHOTOS_ADRESS),
    },
    location : {
      x : locationX,
      y : locationY,
    },
  }
};

export const getAds = (adsNumber) => {
  const adverts = new Array(adsNumber).fill(null).map(createAdvertising);
  return adverts;
};
