angular.module('phoneDetail')
    .component('phoneDetail', {
        template: 'TBD: Detail view {{$ctrl.phoneId}}',
        controller: ['$routeParams', 
            function phoneDetailController($routeParams){
                this.phoneId = $routeParams.phoneId;
            }
        ]
    })