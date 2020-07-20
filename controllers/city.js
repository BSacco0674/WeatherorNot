const City = require("../models/city");

module.exports = {
  create,
};

function create(req, res) {
  console.log("is this working");
  req.body.user = req.user._id;
  City.create(req.body)
    .then((city) => {
      res.json(city);
    })
    .catch((err) => {
      res.json(err);
    });
}
