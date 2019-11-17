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
            hash = '#main-page';
            alert('Wrong URL!');
        }
        elem = App.selector[hash];
        elem.loadPage();
        App.addGlobalPageLogic();
    },
    addGlobalPageLogic: function(){
        let elem = document.getElementById('show-info')
        if(App.selector[location.hash]
            && App.selector[location.hash].translit
            && App.selector[location.hash].translit.information
            && App.selector[location.hash].translit.information[App.getLang()]){
                elem.removeAttribute('disabled');
            } else {
                elem.setAttribute('disabled', 'disabled');
        }
    },
    getLang: function(){
        if(localStorage.getItem('lang')) {
            return localStorage.getItem('lang');
        } else{
            return 'EN';
        }
    },
    setLang: function(lang) {
        localStorage.setItem('lang', lang);
    },
    showTranslit: function(obj) {
        if (!!obj[this.getLang()]){
            return obj[this.getLang()];
        } else {
            return obj['EN'];
        }
    },
    changeLang: function() {
        let selected = document.getElementById('change-lang').options[document.getElementById('change-lang').selectedIndex].value;
        this.setLang(selected);
        location.reload();
    },
    selectCurentLang() {
        [].slice.call(document.getElementById('change-lang').options).filter(element => {
            return element.value == App.getLang()
        })[0].selected = true;        
    }
};
App.onLoad = {
    isBrowserIE: !!document.documentMode,
    buildSelectorMenu: function() {
        for(el in App.selector) {
            elem = App.selector[el];
            if(elem.connectionParams) {
                document.getElementById('nav').innerHTML += '' +
                    '<option value="' + elem.connectionParams.hash +
                    '" title="' + elem.connectionParams.title +
                    '" selected>'+ elem.connectionParams.name +
                    '</option>';
            }
        }
        
        document.getElementById('nav').options[0].selected = true;
    },
    startApp: function(){
        if(this.isBrowserIE){
            alert('!!! You are using IE browser, it shows this site not correct !!!');
        }   

        this.buildSelectorMenu();

        document.getElementById('change-lang').addEventListener('change', function() {
            App.changeLang();
        })

        App.setLang(App.getLang());
        App.selectCurentLang();

        if(location.hash && App.selector[location.hash]){
            App.buildPage(location.hash);
        }
        else{
            location.hash = '#main-page';
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
            App.selectCurentLang();
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
        App.Alert.showInfo(App.selector[location.hash].translit.information);
    },
    showInfo: function(infoObj){
      App.Alert.showAlert('#navigation', infoObj.headText[App.getLang()], infoObj.bodyText[App.getLang()]);
    }
};



