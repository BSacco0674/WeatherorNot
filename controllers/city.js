const City = require("../models/city");
module.exports = {
  create,
  getAll,
};
function create(req, res) {
  console.log(req.body);
  req.body.user = req.user._id;
  City.create(req.body)
    .then((city) => {
      res.json(city);
    })
    .catch((err) => {
      res.json(err);
    });
}
function getAll(req, res) {
  City.find({ user: req.user._id }).then((cities) => {
    res.json(cities);
  });
}
