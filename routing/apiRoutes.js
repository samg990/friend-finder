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

    var userData = req.body;
    var userName = userData.name;
    var userScore = userData.scores;

    // get users scores as a number
    // calculate the sum of the scores
    // loop thru all the users
    // find the closest match
  });
};
