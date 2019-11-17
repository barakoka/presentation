App.Tests = {
    connectionParams: {
        hash: '#tests',
        title: 'Service page',
        name: 'Tests'
    },
    translit:{
        information: {
            headText: {
                EN: ''
            },
            bodyText: {
                EN: 'text'
            }
        }
    },
    loadPage: function(){
        document.getElementById(App.palce).innerHTML = '' +
            '<div id="test-page">' +
            '<input type="button" value="Show confirm alert!" onclick="App.Tests.showConfirmAlert()">' +
        '';
    },
    showConfirmAlert: function() {
        let cbOk = function(){
            alert('Callback function works!')
        };
        App.Alert.showAlert('#navigation', 'Hello!', 'Body text <br> Abra kadabra', true, cbOk);
    }
};
App.selector['#tests'] = App.Tests;