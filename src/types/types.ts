// type можно вкладывать друг в друга
export type Person = {
  name: string,
  age: number | string,  // или
  isMarried: boolean,
  nation?: string // необязательное свойство
}

export type ResponseData = {
  data: Person;
}

// Interface может наследоваться, а type нет
export interface Point {
  x: number;
  y: number;
}

export interface ThreeDPoint extends Point {
  z: number;
}