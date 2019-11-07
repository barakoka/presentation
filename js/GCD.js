// Greatest Common Divisior
App.GCD = {
    getDivisior: function(arr){
        divisior = 0;
        for(let i=1; i<=arr[0]; i++) {
            if( arr.every( elem => elem%i == 0) ) {
                divisior = i;
            }
        }
        return divisior;
    },
    main: function(){
        let arr = document.getElementById('gcd-in').value.split(',');
        document.getElementById('gcd-out').innerHTML = App.GCD.getDivisior(arr);
    },
    loadPage: function(){
        document.getElementById(App.palce).innerHTML = '' +
            '<div id="gcd">' +
                '<div class="text-field">Input array of numbers:</div>' +
                '<input type="text" id="gcd-in">' +
                '<input type="button" value="GO!" onclick="App.GCD.main()">' +
                '<div class="text-field">The greatest common divisior:</div>' +
                '<div id="gcd-out" class="text-field"></div>' +
            '</div>' +
        '';
    }
};
App.selector['#gcd'] = App.GCD;
