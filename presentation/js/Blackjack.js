App.Cards.BlackJack = {
  rand: 0,
  userCount: 0,
  compCount: 0,
  firstStep: true,
  cpuCards: [],
  start: function(){
    if (App.Cards.bool) {
      this.userCount += this.takeCard('player');
      document.getElementById('blackjack-HeadPL').innerHTML = 'Player: ' + this.userCount + ' points';
      if (this.userCount > 21) {
        this.writeOnGame("Your count is " + this.userCount + "<br>" + "Game over");
      }
      else if (this.userCount == 21) {
        this.writeOnGame("Your count is " + this.userCount + "<br>" + "YOU WIN!!!");
      }
      else {
        this.compTakeCard();
      }
    }
    else {
      location.reload();
    }
  },
  takeCard: function(user){
    let tmp = 0;
    let arrNum = Math.floor(Math.random() * App.Cards.kolodaBig.length);
    this.rand = App.Cards.kolodaBig[arrNum];
    App.Cards.kolodaBig.splice(arrNum, 1);
    tmp = App.Cards.countOfCard(this.rand);
    this.addCard(user, this.rand);
    return tmp;
  },
  addCard: function(user, card){
    if (user == 'player') {
      document.getElementById(user).innerHTML  += '<img id="' + card + '" src="cards/' + card + '.png" height="200px">';
    }
    else if (this.firstStep) {
      document.getElementById(user).innerHTML  += '<img id="' + card + '" src="cards/' + card + '.png" height="200px">';
      this.firstStep = false;}
    else {
      document.getElementById(user).innerHTML  += '<img id="' + card + '" src="cards/000.png" height="200px">';
      this.cpuCards.push(card);
      console.log(this.cpuCards);      
    }
  },
  remCard: function(card){
    document.getElementById(card).remove();
    this.userCount -= App.Cards.countOfCard(card);
    document.getElementById('blackjack-HeadPL').innerHTML = 'Player: ' + this.userCount + ' points';
  },
  compTakeCard: function(){
    if (this.compCount < 17) {
      this.compCount += this.takeCard('cpu');
    }
    
    if (this.compCount > 21) {
      this.writeOnGame(this.compCount + " - Dealer lose");
    }
    else if (this.compCount == 21) {
      this.writeOnGame(this.compCount + " - Dealer WIN!!!");
    }
  },
  writeOnGame: function(str){
    document.getElementById('blackjack-HeadCPU').innerHTML = 'Dealer: ' + this.compCount + ' points';
    this.openCard();
    document.getElementById('blackjack-downbar').innerHTML = str;
    App.Cards.bool = false;
  },
  openCard: function() {
    for (var i = this.cpuCards.length - 1; i >= 0; i--) {
      document.getElementById(this.cpuCards[i]).src  = "cards/" + this.cpuCards[i] + ".png";       
    }
  },
  openCards: function() {
    if (App.Cards.bool){
      this.openCard();
      if (this.compCount > this.userCount){this.writeOnGame('Dealer Win');}
      else {this.writeOnGame('Player Win!');}
    }
  },
  preparePage(){
    App.Cards.bool = true;
    this.rand = 0;
    this.userCount = 0;
    this.compCount = 0;
    this.firstStep = true;
    this.cpuCards = [];  
    this.compTakeCard(); 
  },
  pageBody: '' +
    '<div id="blackjack-body">' +
      '<div id="blackjack-downbar" class="blackjack-winblock"></div>' +    
      '<div id="blackjack-mainBlock" class="blackjack-block">' +
          '<div id="blackjack-centralBlock">' +
              '<div id="blackjack-header" class="blackjack-midblock">Black Jack</div>' +
              '<div id="blackjack-HeadCPU" class="blackjack-midblock">Dealer</div>' +
              '<div id="cpu" class="blackjack-cardfild"></div>' +
              '<div class="blackjack-midblock"></div>' +
              '<div id="blackjack-cardblock">' +
                  '<div class="blackjack-vrt">' +
                      '<img src="cards/000.png" height="200px" onclick="App.Cards.BlackJack.start()">' +
                      '<button id="button" onclick="App.Cards.BlackJack.openCards()">OPEN CARDS</button>' +
                  '</div>' +
              '</div>' +
              '<div id="blackjack-HeadPL" class="blackjack-midblock">Player</div>' +
              '<div id="player" class="blackjack-cardfild"></div>' +
          '</div>' +
      '</div>' +
      '<div class="drunkard-footer"></div>'+
    '</div>'+
    ''
};
App.selector['#blackjack'] = App.Cards.BlackJack;