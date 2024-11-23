const admin = require("../models/adminSchema")

module.exports = {
    homePage: (req, res) => {
        return res.render('index')
    },
    addAdminPage: (req, res) => {
        return res.render('./pages/add_admin')
    },
    viewAdminPage: async (req, res) => {
        try {
            let data = await admin.find({})
            return res.render('./pages/view_admin', { data })
        } catch (error) {
            console.log(error)
            return res.render('./pages/view_admin')
        }
    },
    addAdminData: async (req, res) => {
        try {
    
            if (req.file) {
                req.body.image = req.file.path
            }
    
            req.body.name = req.body.fname + ' ' + req.body.lname
    
            await admin.create(req.body)
            return res.redirect('/pages/add_admin')
        } catch (error) {
            console.log(error)
            return res.redirect('/pages/add_admin')
        }
    },
    editAdminPage: async (req, res) => {
        try {
            let { id } = req.params
            let adminData = await admin.findById(id)
            return res.render('./pages/edit_admin', { admin:adminData })
        } catch (error) {
            console.log(error.message)
        }
    },
    signupPage: (req, res) => {
        return res.render('./pages/signup')
    },
    loginPage: (req, res) => {
        return res.render('./pages/login')
    },
    login : async (req, res) => {
        try {
            console.log(req.body)
    
            let { email, password } = req.body
            const currAdmin = await admin.findOne({ email })
            if(currAdmin)
            {
                if(currAdmin.password == password)
                {
                    return res.cookie('adminId', currAdmin.id).redirect('/')
                }
                else
                {
                    return res.status(400).redirect('/login')
                }
            }
    
        } catch (error) {
            console.log(error.message)
            return res.redirect('back')
        }
    }
}
