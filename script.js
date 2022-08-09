'use srtict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 30,
    allServicePrices: 0,
    fullPrice: 0,
    servicePresentPrices: 0,
    servis1: '',
    servis2: '',
    isNumber: function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },    
    asking: function() {
        appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
        appData.screens = prompt("Какие типы экранов нужно разработать?", " Простые, Сложные, Интерактивные");
    
        do {
            appData.screenPrice = prompt("Сколко будет стоить данная работа?");
        } while (!appData.isNumber(appData.screenPrice));
    
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },   
    getAllServisePrices: function(cost) {
        let sum = 0;
    
        for (let i = 0; i < 2; i++) {
            let cost = 0;
    
            if (i === 0) {
                appData.servis1 = prompt("Какой дополнительный тип услуг нужен?");
            } else if (i === 1) {
                appData.servis2 = prompt("Какой дополнительный тип услуг нужен?");
            }
    
            do {
                cost = prompt("Сколько будет стоить?");
            } while (!appData.isNumber(cost));
    
            sum += +cost;
        }
    
        return sum;
    },
    getFullPrice: function() {
        return +appData.screenPrice + appData.allServicePrices;
    },
    getServicePercentPrices: function() {    
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    getTitle: function() {   
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase();
    },
    getRollbackMessage: function(cost) {
        if (cost >= 30000) {
            return 'Делаем скидку 10%';
        } else if (cost >= 15000 && cost < 30000) {
            return 'Делаем скидку 5%';
        } else if (cost >= 0 && cost < 15000) {
            return 'Скидка не предусмотрена';
        } else {
            return 'Что-то пошло не так';
        }            
    },
    logger: function () {
        for (let key in appData) {
          if (typeof appData[key] === "function") {
            console.log("key: ", key);
          } else {
            console.log("key: ", key);
          }
        }
      },    
      start: function () {
        appData.asking();
        appData.allServicePrices = appData.getAllServisePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.title = appData.getTitle();
        appData.logger();
      }            
};




appData.start();

// appData.asking();
// appData.getAllServisePrices();
// appData.getFullPrice();
// appData.getServicePercentPrices();
// appData.getTitle();



// console.log(appData.getTitle());
// console.log(appData.getFullPrice());
// console.log(appData.getServicePercentPrices());




