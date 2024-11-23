const blogs = require("../models/blogSchema");
module.exports.add_blogPage = (req, res) => {
    let { adminId } = req.cookies;
    return res.render('./pages/add_blog', {
        adminId
    });
};

module.exports.add_blog = async (req, res) => {
    try {
        const { title, content, author, adminId } = req.body; // Get data from the form
        await blogs.create({ title, content, author, adminId }); // Create a new blog entry
        console.log("Blog created.");
        return res.redirect('/blog/view_blog'); // Redirect to the view page
    } catch (error) {
        console.log(error);
        return res.redirect('back'); // Go back on error
    }
};

module.exports.view_blogPage = async (req, res) => {
    try {
        const data = await blogs.find({});
        res.render('./pages/view_blog', { data });
    } catch (error) {
        console.error(error);
        res.render('./pages/view_blog', { data: [] });
    }
};

module.exports.edit_blogPage = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await blogs.findById(id);
        if (!data) {
            return res.status(404).send("Blog not found");
        }
        res.render('./pages/edit_blog', { data });
    } catch (error) {
        console.error(error);
        res.redirect('/blog/view_blog');
    }
};

module.exports.edit_blog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, author } = req.body;
        await blogs.findByIdAndUpdate(id, { title, content, author });
        res.redirect('/blog/view_blog');
    } catch (error) {
        console.error(error);
        res.redirect('back');
    }
};

module.exports.delete_blog = async (req, res) => {
    try {
        const { id } = req.params;
        await blogs.findByIdAndDelete(id);
        res.redirect('/blog/view_blog');
    } catch (error) {
        console.error(error);
        res.redirect('/blog/view_blog');
    }
};

const blogss = require("../models/blogSchema");

module.exports.view_all_blogs = async (req, res) => {
    try {
        const data = await blogs.find({});
        let { adminId } = req.cookies; // Get adminId from cookies
        res.render('./pages/all_blog', { data, adminId }); // Pass adminId to the template
    } catch (error) {
        console.error(error);
        res.render('./pages/all_blog', { data: [], adminId: null }); // Render with empty data and null adminId on error
    }
};