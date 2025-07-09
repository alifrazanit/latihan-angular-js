var phonecatApp = angular.module('phonecatApp', []); // [] untuk init module

// init controllers
phonecatApp.controller('PhoneListController', ($scope) => { // nama PhoneListController diambil dari ng-controller
    $scope.phones = [
        {
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.'
        }, {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
        }, {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.'
        }
    ];
});