'use srtict';

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 30,
    allServicePrices: 0,
    fullPrice: 0,
    servicePresentPrices: 0,
    servis: {},
    start: function () {
        appData.asking();
        appData.getAllServisePrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();

        appData.logger();
      },           
    isNumber: function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },    
    asking: function() {
        appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
      
        for (let i = 0; i < 2; i++) {
            let name = prompt("Какие типы экранов нужно разработать?");
            let price = 0;

            do {
                price = prompt("Сколко будет стоить данная работа?");
            } while (!appData.isNumber(price));

            appData.screens.push({id: i, name: name, price: price });
        };
        
        for (let i = 0; i < 2; i++) {
            let sum = appData.screenPrice;

            appData.screens.reduce(function(sum, price) {
                sum + +price;
                }, 0);
        };
        

        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;            
        }

        for (let i = 0; i < 2; i++) {
            let name = prompt("Какой дополнительный тип услуг нужен?");
            let price = 0;
        
            do {
                price = prompt("Сколько будет стоить?");
            } while (!appData.isNumber(price));
            //appData.servis.push({id: i, name: name, price: price });
    
            appData.servis[name] = +price; 
            //appData.servis.id = i;
            
           
        };       
    
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },   
    getAllServisePrices: function() {
            
        for (let key in appData.servis) {
            appData.allServicePrices += appData.servis[key];
        }
    },
    getFullPrice: function() {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
        
    },
    getServicePercentPrices: function() {    
        appData.servicePresentPrices = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
    },
    getTitle: function() {   
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase();
    },
    getRollbackMessage: function(cost) {
        if (price >= 30000) {
            return 'Делаем скидку 10%';
        } else if (price >= 15000 && price < 30000) {
            return 'Делаем скидку 5%';
        } else if (price >= 0 && price < 15000) {
            return 'Скидка не предусмотрена';
        } else {
            return 'Что-то пошло не так';
        }            
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePresentPrices);
        console.log(appData.screens);
        console.log(appData.servis);

    }
};

appData.start();



