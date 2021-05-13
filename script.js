"use strict";

const str = "Hello my f";
const arr = [1, 2, 3];

console.log(str.length);
console.log(arr);
console.log(str.indexOf("my"));
console.log(str.slice(3, 5));
console.log(str.substring(3, 5));
console.log(str.substr(3, 5)); //сколько символов вырезать (с 3тий позиции вырезать 5 5 символов)

// Библиотека Math

const myNum = 3.5;
console.log(Math.round(myNum)); //округление

const test = "12.2px";
console.log(parseInt(test)); //перевод в другую систему исчисления
console.log(parseFloat(test));
