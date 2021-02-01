//Функция, возвращающая случайное целое число из переданного диапазона включительно

const getRandomNum = (min, max) => {
  if (min <= max) {
    return Math.round(Math.random() * (max - min) + min);
  } else {
    throw ('Первое число должно быть меньше второго')

  }
};


getRandomNum()
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#получение_случайного_числа_в_заданном_интервале


//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
const getFloatNum = (min, max, float) => {
  if(min <= max) {
    const result = (Math.random() * (max - min) + min);
    return `${result.toFixed(float)}, количество знаков после запятой: ${float}`;
  } else {
    throw ('Первое число должно быть меньше второго')
  }
}

getFloatNum()
