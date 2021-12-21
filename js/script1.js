// инициализируйте переменную message
// значение должно быть создано с помощью шаблонной строки и с помощью конкатенации.
// строковое значение должно быть создано на основе значений переменных name, age, company, position
// Значение должно быть составлено по шаблону:
// Привет, меня зовут Иван. Мне 25 лет. Я работаю на должности Frontend Developer в компании ITVDN. 

let name = "Иван";
let age = 25;
let company = "ITVDN";
let position = "Frontend Developer";
let message = `Привет, меня зовут ${name}. Мне ${age} лет. Я работаю на должности ${position} в компании ${company}`;

console.log(message);