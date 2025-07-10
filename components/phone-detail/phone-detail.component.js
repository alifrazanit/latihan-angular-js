angular.module('phoneDetail')
    .component('phoneDetail', {
        templateUrl: 'components/phone-detail/phone-detail.template.html',
        controller: ['$http', '$routeParams',
            function phoneDetailController($http, $routeParams) {
                this.phoneId = $routeParams.phoneId;

                $http.get('assets/mocks/nexus-s.json').then((response) => {
                    self.phone = response.data;
                })
            }
        ]
    })