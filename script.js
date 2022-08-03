'use srtict';

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", " Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколко будет стоить данная работа?", "12000");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let servis1 = prompt("Какой дополнительный тип услуг нужен?");
let servisPrice1 = +prompt("Сколько будет стоить?");
let servis2 = prompt("Какой дополнительный тип услуг нужен?");
let servisPrice2 = +prompt("Сколько будет стоить?");
let rollback = 50;
let fullPrice = screenPrice + servisPrice1 + servisPrice2;
let servicePresentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)));

console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(adaptive);
console.log(servis1.toUpperCase() + " - " + servisPrice1 + ' рублей');
console.log(servis2.toUpperCase() + " - " + servisPrice2 + ' рублей');
console.log(fullPrice + ' рублей');
console.log(servicePresentPrice + ' рублей');

switch (true) {
    case fullPrice > 30000:
        console.log('Делаем скидку 10%');
        break;
    case 15000 < fullPrice && fullPrice < 30000:
        console.log('Делаем скидку 5%');
        break;
    case 0 < fullPrice && fullPrice < 15000:
        console.log('Скидка не предусмотрена');
        break;
    default:
        console.log('Что-то пошло не так');
}
