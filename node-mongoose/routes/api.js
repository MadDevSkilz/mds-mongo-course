const router = require("express").Router();
const Planet = require("../models/planet.js");

router.get("/api/v1/all", (req, res) => {
  Planet.find()
    .sort()
    .then( dbPlanet => {
      res.json( dbPlanet );
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/v1/find/:id", (req, res) => {
  Planet.find({ _id: mongoose.Types.ObjectId(req.params.id)})
  .sort({planetName: 1})
  .then( dbPlanet => {
    res.json( dbPlanet );
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.post("/api/v1/create", ({ body }, res) => {
  Planet.create(body)
  .then(dbPlanet => {
    res.json(dbPlanet);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.put("/api/v1/update/:id", (req, res) => {
  Planet.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params.id)}, req.body)
  .then( dbPlanet => {
    res.json(dbPlanet);
  })
  .catch(err => {
    res.status(400).json(err);
  });
  
});

router.delete("/api/v1/delete/:id", (req, res) => {
  Planet.deleteOne({ _id: mongoose.Types.ObjectId(req.params.id)})
  .then( dbPlanet => {
    res.json(dbPlanet)
  });
});

module.exports = router;
