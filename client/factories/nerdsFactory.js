app.factory('nerdsFactory', function ($http, $location) {
    var factory = {};

    factory.add = function (newNerd, cb) {
        $http.post('/addnerd', newNerd).then(function (output) {
            if (output.data.status) {
                $location.url('/dash');
            }
        });
    };

    factory.getAll = function (cb) {
        $http.get('/getall').then(function (output) {
            cb(output.data.nerds);
        })
    };

    factory.like = function (id, cb) {
        $http.post('/like', id).then(function (output) {
            console.log(output.data, "db response!");
            if (output.data.status) {
                cb();
            }
        })
    };

    factory.changeStatus = function (id, cb) {
        $http.post('/changestatus', id).then(function (output) {
            console.log(output.data, "db response!");
            if (output.data.status) {
                cb();
            }
        })
    };

    factory.delete = function(id, cb){
          $http.post('/delete', id).then(function (output) {
            console.log(output.data, "db response!");
            if (output.data.status) {
                cb();
            }
        })
    };

    return factory;
})
