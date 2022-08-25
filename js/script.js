'use srtict';

const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePresentPrices: 0,
    servisPresent: {},
    servisNumber: {},
    countScreens: 0,
    init: function() {        
        appData.addTitle();
        startBtn.addEventListener('click', appData.start);
        inputRange.addEventListener('input', appData.addRollback);        
        buttonPlus.addEventListener('click', appData.addScreenBlock);
    },
    addTitle: function() {
        document.title = title.textContent;
    },
    start: function () {
        appData.addScreens();
        appData.addServis();
        appData.addPrices();
        appData.addRollback();        
        appData.getServicePercentPrices();
        if (appData.block() === 0) {
            startBtn.disablet = true;
        } else {
            startBtn.disablet = false;
            appData.screens.splice(0, appData.screens.length);
        }
        appData.showResult();        
    },    
    showResult: function() {
        total.value = appData.screenPrice;
        totalCount.value = appData.countScreens;
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
        fullTotalCount.value = appData.fullPrice;
        totalCountRollback.value = appData.servicePresentPrices;
    },
    addScreens: function() {
        screens = document.querySelectorAll('.screen');

        screens.forEach(function(screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName= select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            });           
        });
    },
    addServis: function() {
        otherItemsPercent.forEach(function(item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if(check.checked) {
                appData.servisPresent[label.textContent] = +input.value;
            }            
        });

        otherItemsNumber.forEach(function(item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if(check.checked) {
                appData.servisNumber[label.textContent] = +input.value;
            }            
        });        
    },
    addScreenBlock: function(){
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },
    addPrices: function() { 
        if (appData.block() === 0) {
            for (let screen of appData.screens) {
                appData.screenPrice += +screen.price;
                appData.countScreens += screen.count;
            }
    
            for (let key in appData.servisNumber) {
                appData.servicePricesNumber += appData.servisNumber[key];
            }
    
            for (let key in appData.servisPresent) {
                appData.servicePricesPercent += appData.screenPrice * (appData.servisPresent[key] / 100);
            }
    
            appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
        }           
    },
    block: function() {
        let counter = 0;
        for (let i = 0; i < appData.screens.length; i++) {
            if (appData.screens[i].name === 'Тип экранов' ||appData.screens[i].price === 0) {
                counter++;
            }
        }
        if (counter !== 0) {
            startBtn.disablet = true;
        }
        return counter;
    },
    getServicePercentPrices: function() {    
        appData.servicePresentPrices = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
    },
    addRollback: function() {
        inputRangeValue.textContent = inputRange.value + '%';
        appData.rollback = +inputRange.value;
        appData.getServicePercentPrices();
        totalCountRollback.value = appData.servicePresentPrices;
    }
};

appData.init();
