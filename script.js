let title = "My first class";
let screens = "Простые, Сложные, Интерактивные";
let screensPrice = 35;
let rollback = 50;
let fullPrice = 120000;
let adaptive = true

//задание 2
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screensPrice + " долларов");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");
console.log(screens.toLowerCase().split(", "))
console.log("Процент отката посреднику за работу: " + (fullPrice * (rollback/100)))