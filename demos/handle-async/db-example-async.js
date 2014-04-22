// This is an example, it won't run

/*
  Here, we have a pseudo-code express-based API route example.

  We will fetch a user with the passed in ID, fetch comments from that user
  and return the whole thing as a JSON response

  Here, `app` is the instantiated instance of `express`
*/

var async = require('async');
var User = require('./models/User');
var Comment = require('./models/Comment');

module.exports = function(app) {
  app.get('/user/:id', function(req, res) {
    var stack = [];

    stack.push(function(cb) {
      User.findOne({id: req.params.id}, cb);
    });

    stack.push(function(cb) {
      Comment.find({user_id: req.params.id}, cb);
    });

    async.parallel(stack, function(err, results) {
      if (err) {
        // handle error
        return res.send(400);
      }

      var user = results[0];
      var comments = results[1];

      if (!user) {
        // send 404
        return res.send(404);
      }

      res.send({ user: user, comments: comments });
    });
  });
});
