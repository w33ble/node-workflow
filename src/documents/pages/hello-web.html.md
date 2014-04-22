---
title: "Hello Web"
description: "Simplest node web script"
order: 20
---

<h2>Hello World - Web Edition</h2>

<pre><code class="lang-javascript">
// index.js

var http = require('http');

var server = http.createServer(function(req, res) {
res.end('Hello World');
});

server.listen(8080);
console.log('Running on port 8080');
</code></pre>

</div>


<div class="container">
<h2>Execution</h2>
<p>From the terminal, run `node` and the file to file</p>

<pre><code class="lang-bash">
$ node index.js
Running on port 8080
</code></pre>
