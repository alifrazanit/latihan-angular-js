// Register `phoneList` component, along with its associated controller and template
angular.
    module('phoneList').
    component('phoneList', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
        templateUrl: 'components/phone-list/phone-list.template.html',
        controller: function PhoneListController($http) {
            var self = this;
            self.orderProp = 'age';
            $http.get('data-phone.json').then((response) => {
                self.phones = response.data;
            });
        }
    });