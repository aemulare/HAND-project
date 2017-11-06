const homeController = require('../controllers/home_controller.js');

module.exports = (app) => {
  app.get('/', homeController.home);
};

