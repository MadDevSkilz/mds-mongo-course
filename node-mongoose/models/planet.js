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
        type: Float
    },
    radius: {
        type: Float
    },
    distanceFromEarth: {
        type: Float
    },
    nearbyStars: [String],
    discoveredBy: {}
});

const Planet = mongoose.model("Planet");

module.exports = Planet;
