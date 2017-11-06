const authController = require('../controllers/auth_controller.js');

module.exports = app => app.get('/signup', authController.signup);
