let inputX = prompt("Введите первое слагаемое", 0);
let inputY = prompt("Введите второе слагаемое", 0);

let x = Number(inputX);
let y = Number(inputY);

let sum = x + y;
let sum1 = x - y;
let sum2 = x * y;
let sum3 = x / y;

let joined = x + ' + ' + y + ' = ' + sum;
let joined1 = x + ' - ' + y + ' = ' + sum1;
let joined2 = x + ' * ' + y + ' = ' + sum2;
let joined3 = x + ' / ' + y + ' = ' + sum3;


alert(`${x} + ${y} = ${sum}`);
alert(`${x} - ${y} = ${sum1}`);
alert(`${x} * ${y} = ${sum2}`);
alert(`${x} / ${y} = ${sum3}`);


console.log(joined);
console.log(joined1);
console.log(joined2);
console.log(joined3);



