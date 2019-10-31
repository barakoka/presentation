var App = {
    selector: {},
    palce: 'blocks',
    writeText: function(str, id, isNewLine) {
        newLine = isNewLine ? '<br>' : '';
        if(!id) {
            console.log(str);
        } else {
            document.getElementById(id).innerHTML += newLine + str;
        }
    },
    buildPage: function(hash) {
        if (!App.selector[hash]) {
            hash = '#mainpage';
            alert('Wrong URL!');
        }
        elem = App.selector[hash];
        document.getElementById(App.palce).innerHTML = elem.pageBody;
        elem.preparePage();
        App.addGlobalPageLogic();
    },
    addGlobalPageLogic: function(){
        let elem = document.getElementById('show-info')
        if(App.selector[location.hash] && !App.selector[location.hash].information){
            elem.setAttribute('disabled', 'disabled');
        } else {
            elem.removeAttribute('disabled');
        }
    }
};
App.onLoad = {
    isBrowserIE: !!document.documentMode,
    startApp: function(){
        if(this.isBrowserIE){
            alert('!!! You are using IE browser, it shows this site not correct !!!');
        }   

        if(location.hash && App.selector[location.hash]){
            App.buildPage(location.hash);
        }
        else{
            location.hash = '#mainpage';
        }

        window.addEventListener('hashchange', function(){
            App.buildPage(location.hash);
        });
        
        document.getElementById('navigation').addEventListener('change', function(){
            let selected = document.getElementById('nav').options[document.getElementById('nav').selectedIndex].value;
            document.getElementById('nav').selectedIndex = 0;
            if (selected){
                location.hash = selected;
            }
        });
    }
};
App.Alert = {
    showAlert: function(inputPlace, headContent, bodyContent, isConfirm, okCallback, cancelCallback, okBtnText = 'Yes', noBtnText = 'Cancel') {
        headContent = headContent ? headContent : '';
        let buttons = isConfirm 
        ? ( '<button type="button" class="btn childPopapYes">' + okBtnText + '</button>' +
            '<button type="button" class="btn childPopupCancel">' + noBtnText + '</button>')
        : ( '<button type="button" class="btn childPopupClose">' + 'Close' + '</button>');
        let htmlString = '' +
            '<div class="popup-box">' +
                '<div class="popup-shadow"></div>' +
                '<div class="popup-content">' +
                    '<div class="popup-header">' + headContent + '</div>' +
                    '<div class="popup-body">' + bodyContent + '</div>' +
                    '<div class="popup-footer">' + buttons + '</div>' +
                '</div>' +
            '</div>';
        
        document.querySelector(inputPlace).innerHTML += htmlString;
        App.Alert.alertEvents(isConfirm, okCallback, cancelCallback);
    },
    alertEvents: function(isConfirm, okCallback, cancelCallback) {
        if(isConfirm){
            document.getElementsByClassName('childPopapYes')[0].addEventListener('click', function(){
                this.closest('.popup-box').remove();
                okCallback && okCallback();
            });
            document.getElementsByClassName('childPopupCancel')[0].addEventListener('click', function(){
                this.closest('.popup-box').remove();
                cancelCallback && cancelCallback();
            });        
        } else{
            document.getElementsByClassName('childPopupClose')[0].addEventListener('click', function(){
                this.closest('.popup-box').remove();            
            });
        }
    },
    showInfoButtonEvent: function(){
        App.Alert.showInfo(App.selector[location.hash].information);
    },
    showInfo: function(infoObj){
      App.Alert.showAlert('#navigation', infoObj.headText, infoObj.bodyText);
    }
};
App.Tests = {
    information: {
        headText: '',
        bodyText: 'text'
    },
    pageBody: '' +
        '<div id="test-page">' +
            '<input type="button" value="Show confirm alert!" onclick="App.Tests.showConfirmAlert()">' +
        '',
    preparePage: function(){
        return false;
    },
    showConfirmAlert: function() {
        let cbOk = function(){
            alert('Callback function works!')
        };
        App.Alert.showAlert('#navigation', 'Hello!', 'Body text <br> Abra kadabra', true, cbOk);
    }
};
App.selector['#tests'] = App.Tests;


