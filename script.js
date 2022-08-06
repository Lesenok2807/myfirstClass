'use srtict';

let title;
let screens;
let screenPrice;
let adaptive;

let rollback = 50;
let allServicePrices;
let fullPrice; // = screenPrice + servisPrice1 + servisPrice2;
let servicePresentPrice; // = Math.ceil(fullPrice - (fullPrice * (rollback/100)));
let servis1;
let servis2;

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function() {
    title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    screens = prompt("Какие типы экранов нужно разработать?", " Простые, Сложные, Интерактивные");
    screenPrice = prompt("Сколко будет стоить данная работа?");

    while (!isNumber(screenPrice)) {

        screenPrice = prompt("Сколко будет стоить данная работа?");
    }
    adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServisePrices = function() {
    let sum = 0;

    for (let i = 0; i < 2; i++){

        if (i === 0) {
            servis1 = prompt("Какой дополнительный тип услуг нужен?");
        } else if (i === 1) {
            servis2 = prompt("Какой дополнительный тип услуг нужен?");
        }

        sum += +prompt("Сколько будет стоить?");
    }

    return sum;
};

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

function getFullPrice() {
    return screenPrice + allServicePrices;
};

const getTitle = function(title) {
    if (typeof title != 'string') return '';
    return title.charAt(0).trim().toUpperCase() + title.trim().matchslice(1).toLowerCase();
};

const getServicePercentPrices = function() {
    return Math.ceil(fullPrice - (fullPrice * (rollback/100)));
};

const getRollbackMessage = function() {
    switch (true) {
        case fullPrice >= 30000:
            return'Делаем скидку 10%';
        case fullPrice >= 15000 && fullPrice < 30000:
            return'Делаем скидку 5%';
        case fullPrice >= 0 && fullPrice < 15000:
            return 'Скидка не предусмотрена';
        default:
            return 'Что-то пошло не так';
    }
    
};

asking();
allServicePrices = getAllServisePrices();
fullPrice = getFullPrice();
servicePresentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log('allServicePrices', allServicePrices);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof servicePresentPrice);

console.log(screens.length);
console.log(servicePresentPrice);
console.log("Стоимость верстки экрана: " + screenPrice + " рублей и Стоимость разработки сайта " + fullPrice + " рублей");



