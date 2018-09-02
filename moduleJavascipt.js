
    var modulePatern = {
        myPrperty: 'Junaid your module Pattern',
        myConfig: {
            language: 'english',
            useCashe: true
        },

        firstMethod: function () {
            document.write('<h1>Frist Method in Module Pattern ..<h1>');
        },
        secondMethod: function () {
            document.write('<h2>Second Method in Module Patern <h2>');
        },

        thirdMethod: function (conf) {
            if (typeof conf == 'object') {
                this.myConfig = conf;
            }
            document.write('<h3> Third Method in Module Pattern </h3> ' + this.myConfig.language);
        }

    };
    var secondModulePattern = (function () {
        var counter = 0;
        return {
            incrementCounter: function () {
                return counter++;
            },
            showCounter: function () {
                document.write('Module Pattern 2 value is ' + counter);
            },
            resetCounter: function () {
                counter = 0;
                document.write('Counter value is reset ..' + counter);
            }
        };
    })();

    var moduleBasket = (function () {
        var basket = [{item:'first',price:0}];
        return {
            addItem: function (values) {
                basket.push(values);
            },
            getItemsCount: function () {
                return basket.length;
            },
            getTotal: function () {
                var count = this.getItemsCount();
                var total = 0;
                while (count--)
                {
                    total += basket[count].price;
                    
                }
                return total;
            }
        };
    })();
    modulePatern.firstMethod();
    modulePatern.secondMethod();
    modulePatern.thirdMethod({ language: 'urdu', useCashe: true });
    document.write('<hr>');
    secondModulePattern.incrementCounter();
    secondModulePattern.showCounter();
    document.write('<h1>Shopping Basket <h1>');
    moduleBasket.addItem({ item: 'FootBal', price: 90 });
    moduleBasket.addItem({ item: 'FootBal1', price: 90 });
    moduleBasket.addItem({ item: 'FootBal2', price: 90 });
    document.write('<h2>basket toal is ' + moduleBasket.getTotal());



