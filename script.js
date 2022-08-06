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
    let newTitle = title.trim();
    return newTitle[0].toUpperCase() + newTitle.slice(1).toLowerCase();
};

const getServicePercentPrices = function() {

    return servicePresentPrice;
};

const getRollbackMessage = function() {
    switch (true) {
        case fullPrice >= 30000:
            return 'Делаем скидку 10%';
        case fullPrice >= 15000 && fullPrice < 30000:
            return 'Делаем скидку 5%';
        case fullPrice >= 0 && fullPrice < 15000:
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
console.log(getTitle(title));
console.log(getRollbackMessage());
console.log(getServicePercentPrices() + ' рублей');
console.log("Стоимость верстки экрана: " + screenPrice + " рублей и Стоимость разработки сайта " + fullPrice + " рублей");
