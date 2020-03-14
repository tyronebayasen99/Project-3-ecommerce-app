const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Flight.find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(error => res.json(error));
    },
    findById: function (req, res) {
        db.Flight.findOne({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(error => res.json(error));
    },
    create: function (req, res) {
        db.Flight.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(error => res.json(error));
    },
    update: function (req, res) {
        db.Flight.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(error => res.json(error));
    },
    remove: function (req, res) {
        db.Flight.findOne({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(error => res.json(error));
    }
}
