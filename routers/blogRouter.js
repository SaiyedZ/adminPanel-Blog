const { Router } = require("express");
const blogCtl = require('../controllers/blogController');

const blogRouter = Router();

blogRouter.get('/add_blog', blogCtl.add_blogPage);
blogRouter.post('/add_blog', blogCtl.add_blog);
blogRouter.get('/view_blog', blogCtl.view_blogPage);
blogRouter.get('/edit_blog/:id', blogCtl.edit_blogPage);
blogRouter.post('/edit_blog/:id', blogCtl.edit_blog);
blogRouter.get('/delete_blog/:id', blogCtl.delete_blog);

module.exports = blogRouter;