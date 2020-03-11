const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/mongoStorefront"
);

const merchSeed = [
    {
        title: "Merch 1",
        description: "Description 1",
        price: 1,
        inStock: true
    },
    {
        title: "Merch 2",
        description: "Description 2",
        price: 1,
        inStock: true
    },
    {
        title: "Merch 3",
        description: "Description 3",
        price: 1,
        inStock: true
    },
    {
        title: "Merch 4",
        description: "Description 4",
        price: 1,
        inStock: true
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