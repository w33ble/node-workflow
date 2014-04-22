// callback code, this works

var count = 0;

function addSecond(num, cb) {
  setTimeout(function() {
    num++;
    cb(num);
  }, 1000);
}

addSecond(count, function(num) {
  console.log("1 Second passed, count is now " + num);
});
