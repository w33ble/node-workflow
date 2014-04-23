---
title: "Deploying Your App"
description: "You have your sweet Node app, now what?"
order: 60
---

## Problem

You built your Node app (congrats on that!), but where do you put it?

## Solutions

You have some options, as it turns out. Here are some I've used and liked.

### Heroku

[Heroku](https://www.heroku.com/) is a IaaS service and supports Node and several other languages. Their external plug-ins such as MongoLabs and RedisToGo, to name a couple, make it really convenient.

Deployment involves pushing a git repo to their servers; that's it. They have a command line utility you can install that will allow you to control your instance as well. Best of all, they have a [free tier](https://www.heroku.com/pricing) to tinker with, so you can get your app online without taking out your wallet.

### Modulus

[Modulus](http://modulus.io/) is another IaaS, but unlike Heroku, they only deal with Node hosting. They have native DB and File storage, and while they lack a free tier, their service is a bit cheaper than Heroku's.

Deployment is simple and happens via a command line utility that you install from `npm`.

### Github Pages

[Github Pages](https://pages.github.com/) is a great place to deploy static content (like the very page you are looking at, for example).

It's not specific to node; in fact it will not run node. I mention it because there are a number of handy Node-based static site generators like [Docpad](http://docpad.org/), [Metalsmith](http://www.metalsmith.io/) and [Harp](https://www.harp.io/), and static sites are often times all people really need when they reach for something like Wordpress.

### Divshot

[Divshot](http://www.divshot.com/) is for static hosting, much like Github Pages. They are different in that they focus on production-level hosting, add super fast caching and make deployment as simple as running a command line script, which you install with `npm`.

### Your own box

With servers being as cheap as [$5 a month](https://www.digitalocean.com/?refcode=3f080df3953e), you may just want to host your app yourself. There are 2 modules that work well for doing this.

- [forever](https://github.com/nodejitsu/forever) will daemonize your node application, making sure that it stays running. If it crashes, `forever` will restart it for you
- [pm2](https://github.com/Unitech/pm2) will also daemonize your node app, but will also help you scale it to multiple processes. Have a box with more than 1 core? Why not run more than 1 copy of your app on it then?! `pm2` will help you do that, and more.