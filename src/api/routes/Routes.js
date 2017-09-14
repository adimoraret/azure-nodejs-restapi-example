'use strict';

module.exports = function(app) {
    const homeController = require('../controllers/HomeController');
    app.route('/').get(homeController.getHomePage);

    const usersController = require('../controllers/UsersController');
    app.route('/users').get(usersController.getUsers);
};