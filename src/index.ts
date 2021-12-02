import { Person } from "./types/types";
// Типы данных

// 1. Number
const num: number = 10;

// 2. String
const str: string = 'Hello';

// 3. Boolean
const isReady: boolean = true;

// 4. Array of strings
let strArr: string[] = ['Hello', 'World'];
strArr.push('erger');

// 5. Object
const obj: {
  name: string,
  age: number
} = {
  name: 'Felix',
  age: 45
};

// 6. Type - чтобы в object не описывать св-ва и их типы (import)
const igor: Person = {
  name: 'Igor',
  age: 'Ten', // number | string,  или
  isMarried: true
}

const lena: Person = {
  name: 'Lena',
  age: 19, // number | string,  или
  isMarried: true,
  nation: 'Russian' // необязательнок св-во
}



// 7. Function
// 7.1 Function Declaration
function funcDeclar(a: number): number[] {
  return [a ** 2];
}
console.log(funcDeclar(10));


// 7.2 Function Expression
const funcExp = function (x: number): boolean {
  return !!x;
}

funcExp(1100);


// 7.3 Arrow function
const arrFunc = (x: string): string => {
  return x;
}
console.log(arrFunc('Hello'));

const arrFunc3 = (isReady: boolean): string => isReady ? 'Ready' : 'Not ready';
console.log(arrFunc3(false));


// Или другой синтаксис, где сначала ставим : и описываем (аргументы) и что возвращает =>
const arrFunc2: (x: number) => boolean = (x) => {
  if (x > 10) {
    return true;
  } else {
    return false;
  }
}
console.log(arrFunc2(50));

const arrFunc4: (a: number) => string = (a) => `${a}`;
console.log(arrFunc4(500));


// 8. Void - пустота. Т.е. ожидается, что функция ничего не вернет (нет return)
const logNumber = (x: number): void => console.log(x);
console.log(654);


// 9. Enum
const enum ScreenSizes {
  small = 'small',
  mediim = 'medium',
  wide = 'wide'
}

const enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]


// 10. Generic
function myTest<A, B>(x: A, y: B): B {
  return y;
}

myTest({}, 6);