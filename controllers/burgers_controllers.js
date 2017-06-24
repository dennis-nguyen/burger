let express = require("express");
let router = express.Router();
let burgers = require("../models/burgers.js");

router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    let burgerObject = {
      burgers: data
    };
    res.render("index", burgerObject);
  });
});

router.put("/:id", function(req, res) {
  let id = req.params.id;
  burgers.updateOne(id, function() {
    res.redirect("/");
  });
});

router.post("/", function(req, res) {
  let burgerName = req.body.name;
  burgers.insertOne(burgerName, function() {
    res.redirect("/");
  });
});

module.exports = router;