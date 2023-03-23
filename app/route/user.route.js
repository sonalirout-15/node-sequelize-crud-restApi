module.exports = function (app) {

    const user = require("../controller/user.controller.js");

    app.post('/api/user', user.create);
    app.get('/api/users', user.findAll);
    app.get('/api/user/:userId', user.findByPk);
    app.put('/api/user/:userId', user.update);
    app.delete('/api/user/:userId', user.delete);
}