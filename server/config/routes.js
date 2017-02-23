var users = require('./../controllers/users.js');
var nerds = require('./../controllers/nerds.js');

module.exports = function(app){
    app.post('/login', users.login);
    app.get('/checkuser', users.checkUser);
    app.get('/logout', users.logout);
    app.post('/addnerd', nerds.add);
    app.post('/like', nerds.like);
    app.get('/getall', nerds.getall);
    app.post('/changestatus', nerds.changestatus);
    app.post('/delete', nerds.delete);
}
