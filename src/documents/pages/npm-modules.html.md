---
title: "NPM Modules"
description: "This is where Node's true power comes from"
order: 35
---

## Modules

Node comes with a command line tool called NPM.

- `npm` is used to search, install and publish node modules.
- [npmjs.org](https://www.npmjs.org/) can be used to browse packages
- [Nipster](http://eirikb.github.io/nipster) ranks modules by github stats, and is a great way to search

## Make your own

Node uses [CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1) for its module system.

### Short version

- Use `require` to use modules
- Use `module.exports` to make your module return a function
- Use `exports.method` to make your module return multiple methods

### Examples

WARNING: This is contrived, example code. Don't use it in real life code.

#### Blink tag module

<div>
<pre><code class="lang-javascript">
// blinky.js

module.exports = function(str) {
  return str.blink();
}
</code></pre>
</div>

<div>
<pre><code class="lang-javascript">
// index.js

var blinky = require('./blinky');
console.log(blinky('Hello World'));
</code></pre>
</div>

#### Calculator module

<div>
<pre><code class="lang-javascript">
// maths.js

export.add = function(a, b) {
  return a + b;
}

export.subtract = function(a, b) {
  return a - b;
}

// ...etc
</code></pre>
</div>

<div>
<pre><code class="lang-javascript">
// index.js

var maths = require('./maths');
console.log(maths.add(2, 4));
console.log(maths.subtract(6, 2839827349827534));
</code></pre>
</div>