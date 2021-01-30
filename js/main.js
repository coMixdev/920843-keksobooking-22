//Функция, возвращающая случайное целое число из переданного диапазона включительно

const getRandomNum = function (min, max) {
  if (min < max) {
    if (min > 0 && max > 0) {
      return Math.round(Math.random() * (max - min) + min);
    } else {
      console.log('Введите положительные числа');
    }
  } else {
    console.log('Первое число должно быть больше второго');
  }
};

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#получение_случайного_числа_в_заданном_интервале


//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
const getRandomNum = function (min, max, float) {
  if(min < max) {
    if (min > 0 && max > 0){
    const result = (Math.random() * (max - min) + min);
    return `${result.toFixed(float)}, количество знаков после запятой: ${float}`;

  } else { console.log('Введите положительные числа')
  }
  } else {console.log('Первое число должно быть больше второго')
  }
  }

