// Выведите на экран сколько пользователю нужно заплатить за каждый продукт по отдельности и всего за все продукты
// используйте форматированный вывод

let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
let product2 = "Биндеры для бумаги 51 мм";
let product3 = "Ручка шариковая синяя";

let productPrice1 = 280.25;
let productPrice2 = 56;
let productPrice3 = 12.50;

let productQuantity1 = +prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
let productQuantity2 = +prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
let productQuantity3 = +prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);

let sum1 = productPrice1 * productQuantity1;
let sum2 = productPrice2 * productQuantity2;
let sum3 = productPrice3 * productQuantity3;

let count = sum1 + sum2 + sum3;

alert(`Общая сумма по продукту '${product1}' составляет ${sum1} $`);
alert(`Общая сумма по продукту '${product2}' составляет ${sum2} $`);
alert(`Общая сумма по продукту '${product3}' составляет ${sum3} $`);
alert("Всего " + count);