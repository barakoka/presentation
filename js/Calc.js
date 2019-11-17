App.Calc = {
    connectionParams: {
        hash: '#calc',
        title: 'Calculate what do you want',
        name: 'Calc'
    },
    data: {
        calcDisplay: {},
        buttons: []
    },
    translit: {
        information: {
            headText: {
                EN: 'Hello!',
                UA: 'Привіт!'
            },
            bodyText: {
                EN: 'Calculate what you want',
                UA: 'Рахуй все що хочеш'
            }
        }
    },
    addNumberOrOperator: function(number) {
        if(this.data.calcDisplay.innerText === '0' && number !== '/' && number !== '*' && number !== '.') {
            this.data.calcDisplay.innerText = number;
        } else if(!this.isWrongInput(number)) {
            this.data.calcDisplay.innerText += number;
        }
    },
    removeLast: function() {
        var textArr = this.data.calcDisplay.innerText.split('');
        this.data.calcDisplay.innerText = textArr.slice(0,textArr.length-1).join('');
    
        if(this.data.calcDisplay.innerText == '') {
            this.data.calcDisplay.innerText = '0';
        }
    },
    clearAll: function() {
        this.data.calcDisplay.innerText = '0';
    },
    isWrongInput: function(number) {
        var result = false;
        var isLastSymbool = ['/', '*', '+', '-', '.'].indexOf(this.data.calcDisplay.innerText[this.data.calcDisplay.innerText.length-1]) != -1;
        if (!number) {
            result = isLastSymbool;
        } else {
            var isNumber = ['/', '*', '+', '-', '.'].indexOf(number) != -1;
            result = isLastSymbool && isNumber;
        }
        return result;
    },
    loadPage: function() {
        document.getElementById(App.palce).innerHTML = '' +
            '<div class="calc-body">' +
                '<div id="disp"></div>' +
                '<div class="button data">7</div>' +
                '<div class="button data">8</div>' +
                '<div class="button data">9</div>' +
                '<div class="button delete">←</div>' +
                '<div class="button remove">C</div>' +
                '<div class="button data">4</div>' +
                '<div class="button data">5</div>' +
                '<div class="button data">6</div>' +
                '<div class="button data">*</div>' +
                '<div class="button data">/</div>' +
                '<div class="button data">1</div>' +
                '<div class="button data">2</div>' +
                '<div class="button data">3</div>' +
                '<div class="button data">+</div>' +
                '<div class="button data">-</div>' +
                '<div class="button"></div>' +
                '<div class="button data">0</div>' +
                '<div class="button data">.</div>' +
                '<div class="button action">=</div>' +
                '<div class="button"></div>' +
            '</div>' +   
        '';

        this.data.calcDisplay = document.getElementById('disp');
        this.data.calcDisplay.innerText = '0';
        this.data.buttons = [].slice.call(document.querySelectorAll('.button.data')); // document.getElementsByClassName('button')
        this.data.buttons.forEach(element => {
          element.addEventListener('click', function(){
            App.Calc.addNumberOrOperator(element.innerText);
          })
      });
      document.getElementsByClassName('remove')[0].addEventListener('click', function() {
        App.Calc.clearAll();
      });
      document.getElementsByClassName('delete')[0].addEventListener('click', function() {
        App.Calc.removeLast();
      });
      document.getElementsByClassName('action')[0].addEventListener('click', function() {
          if(!App.Calc.isWrongInput(false)) {
              var calculate = new Function('', 'return ' + App.Calc.data.calcDisplay.innerText + ';');
              App.Calc.data.calcDisplay.innerText = calculate();
          }
      });
    }
};
App.selector['#calc'] = App.Calc;




