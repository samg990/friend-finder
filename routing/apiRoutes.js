var friends = require("../app/data/friend.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var totalDifference = 0;
    var best = {
      name: "",
      photo: "",
      friendDiff: 100,
    };
  });
};
