const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/mongoStorefront"
);

const merchSeed = [
    {
        dateRange: "Merch 1",
        location: "Description 1",
        price: 1,
        isSaved: false
    },
    {
        title: "Merch 2",
        location: "Description 2",
        price: 1,
        isSaved: false
    },
    {
        title: "Merch 3",
        location: "Description 3",
        price: 1,
        isSaved: false
    },
    {
        title: "Merch 4",
        location: "Description 4",
        price: 1,
        isSaved: false
    }
]

db.Merch
    .remove({})
    .then(() => db.Merch.collection.insertMany(merchSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });