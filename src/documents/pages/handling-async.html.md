---
title: "Handling Async"
description: "How to write non-blocking code in Node's single thread"
order: 40
---

## Problem

Node is single threaded, so blocking code blocks everyone

## Solutions

### Callbacks

Functions are first-class, we can pass them in and have them execute at completion

### Async module

> Async utilities for node and the browser

[Github page](https://github.com/caolan/async)

`async` makes callbacks manageable and gives you a unified way to handle errors in the chain. It also provides some interesting abstractions, like `waterfall`, `until`, `parallelLimit`, `queue` and several others.

### Promises

Coming to V8, might be native to node

There are some great libraries for using Promises right now though

- [when.js](https://github.com/elijahr/when.js)
- [Q](https://github.com/kriskowal/q)
- [bluebird](https://github.com/petkaantonov/bluebird)

Resources:

- Docs for the above projects
- [Write Better JavaScript with Promises](http://davidwalsh.name/write-javascript-promises)
- [JavaScript Promises - There and back again](http://www.html5rocks.com/en/tutorials/es6/promises/)
- [Promise Anti-patterns](http://taoofcode.net/promise-anti-patterns/)

### Generators

Coming to ES6 and V8, will be native to node

Still not "production ready", but you can use now with the `--harmony` flag