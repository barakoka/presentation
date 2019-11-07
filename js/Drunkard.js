App.Cards.Drunkard = {
  userCards: [],
  compCards: [],
  drinkArr: [],
  iterator: 0,
  click: 1,
  writeOnGame: function(str) {
    document.getElementById('downbar').innerHTML = str;
    App.Cards.bool = false;
  },
  sortCards: function() {
    let tempArr = this.shuffle(App.Cards.kolodaSmall);
    for (var i = tempArr.length - 1; i >= 0; i--) {
      if (i%2 == 0) {
        this.userCards.push(tempArr[i]);
      }
      else {
        this.compCards.push(tempArr[i]);
      }
    }
    document.getElementById('HeadPL').innerHTML = this.userCards.length + ' card(s)';
    document.getElementById('HeadCPU').innerHTML = this.compCards.length + ' card(s)';
    console.log('user cards: ' + this.userCards + '\n' + 'comp cards: ' + this.compCards + '\n');
  },
  start: function() {
    if (App.Cards.bool){
      this.takeCard();
    }
    else {
      location.reload();
    }
  },
  bestCard: function(userCard, compCard) {
    if (App.Cards.countOfCard(userCard) == 6 && App.Cards.countOfCard(compCard) == 1){
      return true;
    }
    else if (App.Cards.countOfCard(compCard) == 6 && App.Cards.countOfCard(userCard) == 1) {
      return false;
    }
    else if (App.Cards.countOfCard(userCard) == 1) {
      return true;
    }
    else if (App.Cards.countOfCard(compCard) == 1) {
      return false;
    }
    else if (App.Cards.countOfCard(userCard) > App.Cards.countOfCard(compCard)) {
      return true;
    }
    else {
      return false;
    }
  },
  takeCard: function() {
      if (this.userCards.length > 0 && this.compCards.length > 0){
        if (this.click == 3) {
          this.click3();
        }
        if (this.click == 2) {
          this.click2();
        }
        if (this.click == 1) {
          this.click1();
        }
      }
      else if (this.userCards.length <= 0) {
        this.writeOnGame('You lose');
      }
      else {
        this.writeOnGame('You WIN!');
      }
  },
  click1: function(){
    console.log('start click1 \n');
    this.drinkArr[this.iterator] = this.userCards[0];
    this.addCard('cardblock-user', this.drinkArr[this.iterator], this.drinkArr[this.iterator]);
    this.userCards.splice(0, 1);
    this.iterator++;
    this.drinkArr[this.iterator] = this.compCards[0];
    this.addCard('cardblock-cpu', this.drinkArr[this.iterator], this.drinkArr[this.iterator]);
    this.compCards.splice(0, 1);
    console.log('take_card ' + this.drinkArr[this.iterator-1] + '   ' + this.drinkArr[this.iterator] + '\n' + this.userCards + '\n' + this.compCards + '\n');
    if (App.Cards.countOfCard(this.drinkArr[this.iterator-1]) == App.Cards.countOfCard(this.drinkArr[this.iterator])){
      this.click = 2;
    }
    else {
      this.click = 3;
    }
  },
  click2: function(){
    console.log('start click2 \n');
    this.click = 1;
    this.drink();
  },
  click3: function(){
    console.log('start click3 \n');

    if (this.bestCard(this.drinkArr[this.iterator-1], this.drinkArr[this.iterator])){
      for (let i = this.drinkArr.length - 1; i >= 0; i--) {
        this.userCards.push(this.drinkArr[i]);
        console.log('to user: ' + this.drinkArr[i] + '\n');
      }
      this.click = 3;
    }
    else {
      for (let i = this.drinkArr.length - 1; i >= 0; i--) {
        this.compCards.push(this.drinkArr[i]);
        console.log('to comp: ' + this.drinkArr[i] + '\n');
        this.click = 3;
      }
    }    

    console.log(this.userCards + '\n' + this.compCards + '\n' + '---------------' + '\n' + this.drinkArr + '\n');
    this.remCards(this.drinkArr);
    this.drinkArr = [];
    this.iterator = 0;
    this.click = 1;
    document.getElementById('HeadPL').innerHTML = this.userCards.length + ' card(s)';
    document.getElementById('HeadCPU').innerHTML = this.compCards.length  + ' card(s)';
  },
  drink: function() {
    console.log('start drink \n');
    this.iterator++;
    this.drinkArr[this.iterator] = this.userCards[0];
    this.userCards.splice(0, 1);
    this.addCard('cardblock-user', this.drinkArr[this.iterator], '000');
    this.iterator++;
    this.drinkArr[this.iterator] = this.compCards[0];
    this.addCard('cardblock-cpu', this.drinkArr[this.iterator], '000');
    this.compCards.splice(0, 1);
    this.iterator++;
    this.takeCard();
  },
  shuffle: function(array) {
    let currentIndex = array.length;
    let temporaryValue = 0;
    let randomIndex = 0;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  },
  remCards: function(arr){
    for (var i = arr.length - 1; i >= 0; i--) {
      document.getElementById(arr[i]).remove();       
    }    
  },
  addCard: function(place, card, name){
      document.getElementById(place).innerHTML  += '<img id="' + card + '" src="cards/' + name + '.png" height="200px">';
  },
  loadPage: function(){
    document.getElementById(App.palce).innerHTML = '' +
      '<div id="drunkard-body">' +
        '<div id="downbar" class="drunkard-winblock"></div>' +
        '<div id="drunkard-header">Drunkard</div>' +
        '<div id="drunkard-mainBlock">' +            
            '<div id="leftcolum" class="drunkard-cardcolum">' +            
                '<div class="drunkard-username">Computer</div>' +
                '<div id="cpu" class="drunkard-cardfild">' +
                    '<img src="cards/000.png" height="200px">' +
                '</div>' +
                '<div id="HeadCPU" class="drunkard-username"></div>' +
            '</div>' +

            '<div id="drunkard-centercolum">' +    
                '<div id="cardblock-cpu" class="drunkard-bttlefild"></div>' +
                '<div id="cardblock-user" class="drunkard-bttlefild"></div>' +
            '</div>' +

            '<div id="rightcolum" class="drunkard-cardcolum">' +
                '<div class="drunkard-username">Player</div>' +
                '<div id="player" class="drunkard-cardfild">' +
                    '<img id="uc" src="cards/000.png" height="200px" onclick="App.Cards.Drunkard.start()">' +
                '</div>' +
                '<div id="HeadPL" class="drunkard-username"></div>' +
            '</div>' +    
        '</div>' +
        '' +
      '</div>' +
      '<div class="drunkard-footer"></div>' +
    '';

    App.Cards.bool = true;
    this.userCards.length = 0;
    this.compCards.length = 0;
    this.drinkArr.length = 0;
    this.iterator = 0;
    this.click = 1; 
    this.sortCards(); 
  }
};
App.selector['#drunkard'] = App.Cards.Drunkard;
