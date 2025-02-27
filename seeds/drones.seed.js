// Iteration #1

const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/lab-express-drones';

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error('Error connecting to mongo: ', err);
  });

const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
];

Drone.create(drones)
  .then((dronesdB) => {
    console.log(`drones have been created ${dronesdB.length}`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while creating books from the DB: ${err}`)
  );
