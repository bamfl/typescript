{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": false,
    "outDir": "dist",
    "alwaysStrict": true, // включает добавление строки "use strict" в каждый скомпилированный файл
    "noImplicitAny": true, // noImplicitAny подсвечивает все такие места, гду тип переменной не определён
    "strictNullChecks": true, // не позволяет передавать undefined или null туда, где ожидаются переменные других типов, если это не разрешено явно
    "strictPropertyInitialization": true, // следит, чтобы объявленные свойства класса всегда были инициализированы. Работает только с strictNullChecks
    "strictFunctionTypes": true, // включает более строгую проверку сигнатур функций
    "noImplicitThis": true, // проверяет, что контекст выполнения this известен
    "strictBindCallApply": true, //  включает более строгую проверку сигнатур при использовании соответствующих методов: bind, call, apply
  },
  "lib": ["es2015"]
}