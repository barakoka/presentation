App.Cards = {
  connectionParams: {
    hash: '#cards',
    title: 'Do you want to play card games?',
    name: 'Cards'
},
  kolodaBig: [
    101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113,
    201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213,
    301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313,
    401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413
  ],
  kolodaSmall: [
    101, 106, 107, 108, 109, 110, 111, 112, 113,
    201, 206, 207, 208, 209, 210, 211, 212, 213,
    301, 306, 307, 308, 309, 310, 311, 312, 313,
    401, 406, 407, 408, 409, 410, 411, 412, 413
  ],
  bool: true,
  countOfCard(card, isJQK10) {
    let count = card%100;

    if (isJQK10 && count>10) {
      count = 10;
    }

    return count;
  },
  loadPage: function(){
    document.getElementById(App.palce).innerHTML = '' +
      '<div class="card-table">' +
        '<div id="headBlock">Choose the game</div>' +
        '<div id="mainBlock" class="block">' +
            '<div id="leftpanel" class="column">' +
                '<div id="call-blackjack" class="pic">' +
                    '<img src="img/blackjack.png" width="95%">' +
                '</div>' +
                '<div class="midd"></div>' +
                '<div class="textarea">' +
                    '<div class="gameName">BlackJack</div>' +
                    '<span class="rules">Rules:</span>' +
                    '<span class="mytext">will be added</span>' +
                '</div>' +
            '</div>' +
            '<div id="rightpanel" class="column">' +
                '<div id="call-drunkard" class="pic">' +
                    '<img src="img/drunkard.png" width="95%">' +
                '</div>' +
                '<div class="midd"></div>' +
                '<div class="textarea">' +
                    '<div class="gameName">Drunkard</div>' +
                    '<span class="rules">Rules:</span>' +
                    '<span class="mytext">will be added</span>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div id="footer"></div>' +
      '</div>' +
    '';

    document.getElementById('call-blackjack').addEventListener('click', function(){
      location.hash = '#blackjack';
    });
    document.getElementById('call-drunkard').addEventListener('click', function(){
      location.hash = '#drunkard';
    });
  }
};
App.selector['#cards'] = App.Cards;
