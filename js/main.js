//Функция, возвращающая случайное целое число из переданного диапазона включительно

const getRandomNum = (min, max) => {
  if (min > max){
    throw new Error('Первое число должно быть меньше второго');
  }
  return Math.round(Math.random() * (max - min) + min);
};



//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#получение_случайного_числа_в_заданном_интервале


//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
const getFloatNum = (min, max, float) => {
  if (min > max){
    throw new Error('Первое число должно быть меньше второго');
  }
  const result = Math.random() * (max - min) + min;
  return result.toFixed(float);
}


//Функция для расчета номера изображения
const getAvatarUrl = () => {
  const avatarNum = getRandomNum(1, AVATAR_COUNT);
  const url = `img/avatars/user0${avatarNum}.png`;
  return url;
};

//Функция для получения случайного значения из массива
const getRandomElement = (items) => {
  const index = getRandomNum(0, items.length-1);
  const item = items[index];
  return item;
}

//Функция для перетасовки массива

const shuffle = (list) => {
  for (let i = list.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

//Функция для получения массива случайной длины

const getRandomItem = (list) => {
  let shuffled = shuffle(list);
  let listLength = getRandomNum(1, list.length);
  let newList = shuffled.slice(0, listLength);
  return newList;
}

const TYPES = ['palace', 'flat', 'house', 'bungalo'];
const TIMES = ['12:00', '13:00', '14:00'];
const OPTIONS = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS_ADRESS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const ADS_COUNT = 10;
const AVATAR_COUNT = 8;
const LOCATION_X = getFloatNum(35.65000, 35.70000, 5);
const LOCATION_Y = getFloatNum(139.70000, 139.80000, 5);

const createAdvertising = () => {
  return {
    author : {
      avatar: getAvatarUrl,
    },
    offer : {
      title: 'Самое лучшее предложение',
      adress: `location.${LOCATION_X}, location.${LOCATION_Y}`,
      price: getRandomNum(1, 100000),
      type : getRandomElement(TYPES),
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

ads(ADS_COUNT);
