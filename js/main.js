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
const getRandomAvatar = (min, max) => {
  if (min > max){
    throw new Error('Первое число должно быть меньше второго');
  }
  return `0${Math.round(Math.random() * (max - min) + min)}`;
};

//Функция для получения случайного значения из массива
const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Функция для получения массива случайной длины

const getRandomArray = (arr) => {
  let newArray = [];
  arr.forEach((element) => {
    if (Math.random() > 0.5) {
      return;
    }
    newArray.push(element);
  })
  return newArray;
}


const types = ['palace', 'flat', 'house', 'bungalo'];
const times = ['12:00', '13:00', '14:00'];
const options = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photosAdress = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const adsCount = 10;

const createAdvertising = () => {
  return {
    author : {
      avatar: `img/avatars/user${getRandomAvatar(1,8)}.png`,
    },
    offer : {
      title: 'Самое лучшее предложение',
      adress: `${location.x}, ${location.y}`,
      price: getRandomNum(1, 100000),
      type : getRandomElement(types),
      rooms : getRandomNum(1, 8),
      guests : getRandomNum(1, 15),
      checkin : getRandomElement(times),
      checkout : getRandomElement(times),
      features : getRandomArray(options),
      description : 'Номер класса делюкс с гидромассажной ванной',
      photos : getRandomArray(photosAdress),
    },
    location : {
      x : getFloatNum(35.65000, 35.70000, 5),
      y : getFloatNum(139.70000, 139.80000, 5),

    },
  }
}

const ads = new Array(adsCount).fill(null).map(() => createAdvertising());

