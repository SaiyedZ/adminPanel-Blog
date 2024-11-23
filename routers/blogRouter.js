const { Router } = require("express");
const blogCtl = require('../controllers/blogController');

const blogRouter = Router();

blogRouter.get('/add_blog', blogCtl.add_blogPage); // Get the add blog page
blogRouter.post('/add_blog', blogCtl.add_blog); // Handle adding a new blog
blogRouter.get('/view_blog', blogCtl.view_blogPage); // Get the view blog page
blogRouter.get('/edit_blog/:id', blogCtl.edit_blogPage); // Get the edit blog page
blogRouter.post('/edit_blog/:id', blogCtl.edit_blog); // Handle the edit blog submission
blogRouter.get('/delete_blog/:id', blogCtl.delete_blog); // Handle blog deletion
blogRouter.get('/all_blog', blogCtl.view_all_blogs); // Route to view all blogs

module.exports = blogRouter;