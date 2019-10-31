App.MainPage = {

  pageBody: '' +
    '<div id="main-page">' +
      '<div id="hello-main-page">Hello! It\'s Main Page</div>' +
    '</div>' +
    '',
  information: {
    headText: false,
    bodyText: 'It\'s Main page :)'
  },
  preparePage: function(){
    return false;
  }
};
App.selector['#main-page'] = App.MainPage;

