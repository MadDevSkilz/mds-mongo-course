const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const planetSchema = new Schema({
    planetName: {
        type: String,
        trim: true,
        required: "Planet name is required."
    },
    planetType: {
        type: String,
        trim: true,

    },
    mass: {
        type: Number
    },
    radius: {
        type: Number
    },
    distanceFromEarth: {
        type: Number
    },
    nearbyStars: [String],
    discoveredBy: {}
});

const Planet = mongoose.model("Planet", planetSchema);

module.exports = Planet;
