// This is an example, it won't run

/*
  Here, we have a pseudo-code express-based API route example.

  We will fetch a user with the passed in ID, fetch comments from that user
  and return the whole thing as a JSON response

  Here, `app` is the instantiated instance of `express`
*/

var User = require('./models/User');
var Comment = require('./models/Comment');

module.exports = function(app) {
  app.get('/user/:id', function(req, res) {
    // fetch user data
    User.findOne({id: req.params.id}, function(err, user) {
      if (err) {
        //handle error
        return res.send(400);
      }

      if (!user) {
        // send 404
        return res.send(404);
      }

      // we have a valid user, let's get comments
      Comment.find({user_id: user.id}, function(err, comments) {
        if (err) {
          //handle error
          return;
        }

        // send data to the browser
        res.send({ user: user, comments: comments });
      });
    });
  });
};
