app.controller('nerdsController', ["$scope", "nerdsFactory", "usersFactory", '$location', function ($scope, nerdsFactory, usersFactory, $location) {
    $scope.checkUser = function () { //how do I feel about leaving this chekc user here....
        usersFactory.checkUser(function (data) {
            $scope.curUser = data;
        })
    };

    $scope.getAll = function () {
        nerdsFactory.getAll(function (data) {
            console.log(data);
            $scope.activenerds = [];
            $scope.inactivenerds = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i].status == "active") {
                    $scope.activenerds.push(data[i]);
                }
                else {
                    $scope.inactivenerds.push(data[i]);
                }
            }
        })
    }

    $scope.add = function (newNerd) {
        $scope.errors = [];
        if (!$scope.newNerd || !$scope.newNerd.name || !$scope.newNerd.ability) {
            $scope.errors.push('All fields required');
        } else {
            nerdsFactory.add(newNerd);
        }
    };

    $scope.like = function (id) {
        nerdsFactory.like({ id: id }, function () {
            $scope.getAll();
        });
    }

    $scope.changeStatus = function (id) {
        nerdsFactory.changeStatus({ id: id }, function () {
            $scope.getAll();
        });
    }

    $scope.delete = function (id) {
        nerdsFactory.delete({ id: id }, function () {
            $scope.getAll();
        });
    }

    $scope.checkUser();
    $scope.getAll();
}])