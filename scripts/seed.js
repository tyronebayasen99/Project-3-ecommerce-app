const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/mongoFlights"
);

const flightSeed = [
    {
        date: "date 1",
        destination: "dest 1",
        price: 1,
        description: "descrip 1"
    },
    {
        date: "date 2",
        destination: "dest 2",
        price: 2,
        description: "descrip 2"
    },
    {
        date: "date 3",
        destination: "dest 3",
        price: 3,
        description: "descrip 3"
    },
    {
        date: "date 4",
        destination: "dest 4",
        price: 4,
        description: "descrip 4"
    }
]

db.Flight
    .remove({})
    .then(() => db.Flight.collection.insertMany(flightSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
