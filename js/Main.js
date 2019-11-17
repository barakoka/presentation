App.MainPage = {
  connectionParams: {
    hash: '#main-page',
    title: 'it\'s main page',
    name: 'Main Page'
  },
  translit: {
    information: {
        headText: {
            EN: false
        },
        bodyText: {
            EN: 'It\'s Main page :)'
        }
    }
  },
  loadPage: function(){
    document.getElementById(App.palce).innerHTML = '' +
      '<div id="main-page">' +
        '<div id="hello-main-page">Hello! It\'s Main Page</div>' +
      '</div>' +
    '';
  }
};
App.selector['#main-page'] = App.MainPage;

