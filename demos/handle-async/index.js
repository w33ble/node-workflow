// broken code

var count = 0;

function addSecond(num) {
  setTimeout(function() {
    num++;
  }, 1000);

  return num;
}

count = addSecond(count);

console.log("1 Second passed, count is now " + count);

process.exit();