// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var current = 0;
    var matchindex = 0;
    var smallestnumber = 100;
    for (i in req.body.scores){
      req.body.scores[i]=parseInt(req.body.scores[i]);
      current += parseInt(req.body.scores[i]);
    }
    for (i in friends){
      var score = 0;
      
      for (j in friends[i].scores){
        score += friends[i].scores[j];
      }
      score = Math.abs(score - current);
      
      if (score<smallestnumber){
        smallestnumber = score;
        matchindex = i;
      }
    }
    
    friends.push(req.body);
    console.log(friends[matchindex]);
    res.json(friends[matchindex]);
  });
};
