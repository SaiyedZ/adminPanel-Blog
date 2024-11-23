const { Router } = require("express");
const adminPCtl = require('../controllers/apController');

// admin panel Router.
const apRouter = Router();

// Routes for admin functionalities
apRouter.get('/', adminPCtl.homePage);
apRouter.get('/add_admin', adminPCtl.addAdminPage);
apRouter.get('/view_admin', adminPCtl.viewAdminPage);
apRouter.get('/edit_admin/:id', adminPCtl.editAdminPage);

module.exports = apRouter;