const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    findAll: function (req, res) {
        db.User.find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(error => res.json(error));
    },
    findById: function (req, res) {
        db.User.findOne({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(error => res.json(error));
    },
    logOut: function () {
        localStorage.clear();
        res.json("Logged out user.");
    },
    signUp: async function (req, res) {
        console.log(req.body)
        const email = req.body.email;

        const password = await bcrypt.hash(req.body.password, 10);

        const user = await db.User.create({
            email: email,
            password: password
        }).catch(error => res.json(error));

        const token = jwt.sign({ _id: user._id }, process.env.APP_SECRET);

        res.json(token);
    },
    logIn: async function (req, res) {
        console.log(req.body)
        const user = await db.User.findOne({
            email: req.body.email
        }).catch(error => res.json(error));

        if (!user) {
            res.json("No user found with that email.")
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);

        if (!isPasswordCorrect) {
            res.json("Invalid password.");
        }

        const token = jwt.sign({ _id: user._id }, process.env.APP_SECRET);

        res.json(token);
    }
};