const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Flights.find({})
            .then(dbModel => res.json(dbModel))
            .catch(error => res.json(error));
    },
    findById: function (req, res) {
        db.Flights.findOne({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(error => res.json(error));
    },
    create: function (req, res) {
        db.Flights.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(error => res.json(error));
    },
    update: function (req, res) {
        db.Flights.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(error => res.json(error));
    },
    remove: function (req, res) {
        db.Flights.findOne({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(error => res.json(error));
    }
}
