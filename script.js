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




const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

const getAllServisePrices = function() {
    return servisPrice1 + servisPrice2;
};

function getFullPrice() {
    return fullPrice;
};

const getTitle = function(title) {
    if (typeof title != 'string') return '';
    return title.charAt(0).trim().toUpperCase() + title.trim().matchslice(1).toLowerCase();
};

const getServicePercentPrices = function() {
    return servicePresentPrice;
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


allServicePrices = getAllServisePrices();
fullPrice = getFullPrice();
title = getTitle();
servicePresentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof servicePresentPrice);
console.log(screens.length);
console.log(servicePresentPrice);
console.log("Стоимость верстки экрана: " + screenPrice + " рублей и Стоимость разработки сайта " + fullPrice + " рублей");



