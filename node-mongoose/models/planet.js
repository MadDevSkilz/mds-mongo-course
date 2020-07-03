const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const discoveredBySchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: "The first name must be specified.  Use 'Unknown' if the name is unknown."
    },
    lastName: {
        type: String,
        trim: true,
        required: "The last name must be specified.  Use 'Unknown' if the name is unknown."
    },
    year: {
        type: Number
    },
    origin: {
        type: String,
        trim: true
    }
});

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
        type: Number,
        min: 600e18
    },
    radius: {
        type: Number,
        min: 400
    },
    distanceFromEarth: {
        type: Number,
        min: 0
    },
    nearbyStars: [String],
    discoveredBy: discoveredBySchema
});

const Planet = mongoose.model("Planet", planetSchema);

module.exports = Planet;
