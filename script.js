'use srtict';

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", " Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколко будет стоить данная работа?", "12000");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let servis1 = prompt("Какой дополнительный тип услуг нужен?");
let servis2 = prompt("Какой дополнительный тип услуг нужен?");
let servisPrice1 = +prompt("Сколько будет стоить?");
let servisPrice2 = +prompt("Сколько будет стоить?");
let rollback = 50;
let allServicePrices; 
let fullPrice = screenPrice + servisPrice1 + servisPrice2;
let servicePresentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)));


const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

const getAllServisePrices = function(servisPrice1, servisPrice2) {
    return servisPrice1 + servisPrice2;
};

function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;

};

const getTitle = function(title) {
    if (typeof title != 'string') return '';
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};

const getServicePercentPrices = function() {

    return servicePresentPrice;
};

const getRollbackMessage = function() {
    switch (true) {
        case fullPrice > 30000:
            return'Делаем скидку 10%';
        case 15000 < fullPrice && fullPrice < 30000:
            return'Делаем скидку 5%';
        case 0 < fullPrice && fullPrice < 15000:
            return 'Скидка не предусмотрена';
        default:
            return 'Что-то пошло не так';
    }
    
};


allServicePrices = getAllServisePrices(servisPrice1, servisPrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);
getTitle(title);
showTypeOf(screens);
showTypeOf(rollback);
showTypeOf(fullPrice);


console.log(screens);
console.log(getRollbackMessage());
console.log(getServicePercentPrices() + ' рублей');


