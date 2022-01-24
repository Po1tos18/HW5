// let a = +prompt('Начало диапазона')
// let b = +prompt('Конец диапазона')
// let sum = 0

// while(a <= b){
//     sum+=a;
//     a++;
// }
// alert (sum)
// ---------------------------------
// let a = +prompt('Первое число')
// let b = +prompt('Второе число')
// let nod;
// while (a!=b) {
//   if (a>b) {
//     a = a - b;
//   }
//   else {
//     b = b - a;
//   }
// }
// nod = a;
// alert(nod);
// --------------------------------
// let num = 8;
// let arr = []; 
// if(num < 0)
// {num = num * -1;}
// for (let i = 1; i <= num; i++) {
  
//     if (num % i == 0) 
//     {
//         console.log(i);
//         console.log(i * -1);
//     }
// }
// --------------------------------
// let a = prompt('Введите число')
// let c = 0 
// while(c < a.length){
//     c++
//     console.log(c)
// }
// --------------------------------
let numbers = +prompt('Введите число');
let positive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let odd = 0;
if ((numbers * (-1)) < 0){
    positive++;
} else if ((numbers * (-1)) > 0) {
    negative++;
} else {
    zero++;
}
if (numbers % 2 == 0){
    even++;
}else {
    odd++;
}
numbers = +prompt('Введите число');
if ((numbers * (-1)) < 0){
    positive++;
} else if ((numbers * (-1)) > 0) {
    negative++;
} else {
    zero++;
}
if (numbers % 2 == 0){
    even++;
}else {
    odd++;
}
numbers = +prompt('Введите число');
if ((numbers * (-1)) < 0){
    positive++;
} else if ((numbers * (-1)) > 0) {
    negative++;
} else {
    zero++;
}
if (numbers % 2 == 0){
    even++;
}else {
    odd++;
}
numbers = +prompt('Введите число');
if ((numbers * (-1)) < 0){
    positive++;
} else if ((numbers * (-1)) > 0) {
    negative++;
} else {
    zero++;
}
if (numbers % 2 == 0){
    even++;
}else {
    odd++;
}
numbers = +prompt('Введите число');
if ((numbers * (-1)) < 0){
    positive++;
} else if ((numbers * (-1)) > 0) {
    negative++;
} else {
    zero++;
}
if (numbers % 2 == 0){
    even++;
}else {
    odd++;
}
numbers = +prompt('Введите число');
if ((numbers * (-1)) < 0){
    positive++;
} else if ((numbers * (-1)) > 0) {
    negative++;
} else {
    zero++;
}
if (numbers % 2 == 0){
    even++;
}else {
    odd++;
}
numbers = +prompt('Введите число');
if ((numbers * (-1)) < 0){
    positive++;
} else if ((numbers * (-1)) > 0) {
    negative++;
} else {
    zero++;
}
if (numbers % 2 == 0){
    even++;
}else {
    odd++;
}
numbers = +prompt('Введите число');
if ((numbers * (-1)) < 0){
    positive++;
} else if ((numbers * (-1)) > 0) {
    negative++;
} else {
    zero++;
}
if (numbers % 2 == 0){
    even++;
}else {
    odd++;
}
numbers = +prompt('Введите число');
if ((numbers * (-1)) < 0){
    positive++;
} else if ((numbers * (-1)) > 0) {
    negative++;
} else {
    zero++;
}
if (numbers % 2 == 0){
    even++;
}else {
    odd++;
}
numbers = +prompt('Введите число');
if ((numbers * (-1)) < 0){
    positive++;
} else if ((numbers * (-1)) > 0) {
    negative++;
} else {
    zero++;
}
if (numbers % 2 == 0){
    even++;
}else {
    odd++;
}
console.log('положительных чисел',(positive));
console.log('отрицательных чисел',(negative));
console.log('нулей',(zero));
console.log('четных чисел',(even));
console.log('нечетных чисел',(odd));