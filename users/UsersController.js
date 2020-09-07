const express = require("express");
const router = express.Router();
const User = require("../users/User");

router.get("/newUser", (req, res)=>{
    res.render('newUser');
});

router.get("/userList", (req, res)=>{
    User.findAll({raw: true, order: [
            ['login', 'ASC']
    ]}).then(users =>{
        res.render('userList', {
            users: users
        });
    });
    
});

router.post("/saveUser", (req, res)=>{
    var login = req.body.login;
    var name = req.body.name;
    var password = req.body.password;
    var email = req.body.email;
    var crmUser = req.body.crmUser;
    var profile = req.body.profile;
    
    User.create({
        login: login,
        name: name,
        password: password,
        email: email,
        crm_user: crmUser,
        profile: profile
    }).then(() => {
        res.redirect("/");
    });

});

router.get("/editUser/:login", (req, res) =>{
    var login = req.params.login;
    User.findOne({
        where :{login: login}
    }).then(user =>{
        if(user != undefined){
            res.render("editUser", {
                user: user
            });
        }
        else{
            res.redirect("/");
        }
    });
});

module.exports = router;