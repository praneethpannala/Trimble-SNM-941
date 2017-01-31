(function() {
    'use strict';

    angular
        .module('inTmbleApp')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$mdSidenav'];

    function mainCtrl($mdSidenav) {
        var main = {};
        main.navMenuDisplay = true;
        main.toggleNav = function() {
            main.navMenuDisplay = (main.navMenuDisplay === true) ? false : true;
            $mdSidenav("left")
                .toggle();
        }
        return main;
    }
})();
