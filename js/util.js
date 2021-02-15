const AVATAR_COUNT = 8;

//Функция, возвращающая случайное целое число из переданного диапазона включительно

export const getRandomNum = (min, max) => {
  if (min > max){
    throw new Error('Первое число должно быть меньше второго');
  }
  return Math.round(Math.random() * (max - min) + min);
};



//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#получение_случайного_числа_в_заданном_интервале


//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
export const getFloatNum = (min, max, float) => {
  if (min > max){
    throw new Error('Первое число должно быть меньше второго');
  }
  const result = Math.random() * (max - min) + min;
  return result.toFixed(float);
};


//Функция для расчета номера изображения
export const getAvatarUrl = () => {
  const avatarNum = getRandomNum(1, AVATAR_COUNT);
  const url = `img/avatars/user0${avatarNum}.png`;
  return url;
};

//Функция для получения случайного значения из массива
export const getRandomElement = (items) => {
  const index = getRandomNum(0, items.length-1);
  const item = items[index];
  return item;
};

//Функция для перетасовки массива

const shuffle = (list) => {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
};

//Функция для получения массива случайной длины

export const getRandomArrayLength = (list) => {
  let shuffled = shuffle(list);
  let listLength = getRandomNum(1, list.length);
  let newList = shuffled.slice(0, listLength);
  return newList;
};
