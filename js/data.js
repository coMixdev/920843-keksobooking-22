import {getRandomNum, getFloatNum, getAvatarUrl, getRandomElement, shuffle, getRandomItem} from './util.js'
export {createAdvertising, ads};

const createAdvertising = () => {
  const LOCATION_X = getFloatNum(35.65000, 35.70000, 5);
  const LOCATION_Y = getFloatNum(139.70000, 139.80000, 5);
  return {
    author : {
      avatar: getAvatarUrl(),
    },
    offer : {
      title: 'Самое лучшее предложение',
      adress: `${LOCATION_X}, ${LOCATION_Y}`,
      price: getRandomNum(1, 100000),
      // type : getRandomElement(TYPES),
      rooms : getRandomNum(1, 8),
      guests : getRandomNum(1, 15),
      checkin : getRandomElement(TIMES),
      checkout : getRandomElement(TIMES),
      features : getRandomItem(OPTIONS),
      description : 'Номер класса делюкс с гидромассажной ванной',
      photos : getRandomItem(PHOTOS_ADRESS),
    },
    location : {
      x : LOCATION_X,
      y : LOCATION_Y,

    },
  }
}


const ads = (adsNumber) => {
  const advert = new Array(adsNumber).fill(null).map(createAdvertising);
  return advert;
}

