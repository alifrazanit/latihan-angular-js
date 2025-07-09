angular.module('userList')
.component('userList', {
    templateUrl: 'components/users/user.template.html',
    controller:['$http',
        function UserListController($http) {
            var ctrl = this;
            ctrl.nama = '';
            ctrl.users = ['Alif', 'Budi', 'Caca'];

            ctrl.onAddUser = () => {
                if(ctrl.nama.trim() !== ''){
                    ctrl.users.push(ctrl.nama);
                    ctrl.nama = '';
                }
            }
        }
    ]
})