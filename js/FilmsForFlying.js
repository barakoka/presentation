App.FilmsForFlying = {
  films: [
    {name: 'Matrix', time: 109},
    {name: 'Matrix 2', time: 119},
    {name: 'Matrix 3', time: 120},
    {name: 'Sofi', time: 230},
    {name: 'Simson', time: 185},
    {name: 'Trminator', time: 120},
    {name: 'Trminator 2', time: 156},
    {name: 'Trminator 3', time: 165},
    {name: 'Cars', time: 85},
    {name: 'Cars 2', time: 65},
    {name: 'Cars 3', time: 75},
    {name: 'Little Film 1', time: 50},
    {name: 'Little Film 2', time: 40},
    {name: 'Little Film 3', time: 30},
    {name: 'Long Film 1', time: 250},
    {name: 'Long Film 2', time: 300},
    {name: 'Long Film 3', time: 280},
    {name: 'Long Film 4', time: 350},
    {name: 'Long Film 5', time: 400},
    {name: 'Long Film 6', time: 450}
  ],
  texboxId: 'show-films',
  pageBody: '' +
    '<div id="fly-films" class="text-field">' +
      '<div class="fly-films-row">' +
        '<div class="text-field">Type flying time in minutes: </div>' +
        '<input type="number" value="120" step="5" min="40" max="1200" id="input-fly-time" >' +
        '<input type="button" value="GO!" onclick="App.FilmsForFlying.main()">' +
      '</div>' +
      '<hr>' +
      '<div id="show-films"></div>' +
    '</div>',
  bestFilms: function (flyTime, films) {
    let length = films.length;
    let filmPair = [];
    let longestFilm = 0;
    for(let i=0; i < length; i++) {
      for(let j=i+1; j < length; j++) {
        let filmTime = films[i].time + films[j].time;
        if(i!=j && filmTime <= (flyTime-30) && filmTime > (flyTime-45)) {
          if(longestFilm < films[j].time || longestFilm < films[i].time) {
            filmPair = [films[i], films[j]];
            if(films[i].time < films[j].time) {
              longestFilm = films[j].time;
            } else {
              longestFilm = films[i].time;
            }
          }
        }
      }
    }
    return filmPair;
  },
  showFilms: function(filmPair){
    document.getElementById(App.FilmsForFlying.texboxId).innerHTML = '';
    if(filmPair.length == 2){
      App.writeText('<b>You will  see next films:</b>', App.FilmsForFlying.texboxId, 0);
      App.writeText('Film 1: <b>' + filmPair[0].name + '</b>  |  time: <b>' + filmPair[0].time + '</b> minutes', App.FilmsForFlying.texboxId, 1);
      App.writeText('Film 2: <b>' + filmPair[1].name + '</b>  |  time: <b>' + filmPair[1].time + '</b> minutes', App.FilmsForFlying.texboxId, 1);
    } else {
      App.writeText('films doesn`t find', App.FilmsForFlying.texboxId, 0);
    }
  },
  main: function(){
    let time = document.getElementById('input-fly-time').value;
    App.FilmsForFlying.showFilms(App.FilmsForFlying.bestFilms(time, App.FilmsForFlying.films));
  },
  preparePage: function(){
    return false;
  }
};
App.selector['#films-for-flying'] = App.FilmsForFlying;
