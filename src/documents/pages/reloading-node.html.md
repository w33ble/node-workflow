---
title: "Reloading Node"
description: "Dealing with changes to your application"
order: 30
---

## Problem

Node runs from memory and does not reload itself with changes

## Solution

`nodemon` to the rescue

> Simple monitor script for use during development of a node.js app.

- Automatic restarting of application.
- Detects default file extension to monitor.
- Default support for node & coffeescript, but easy to run any executable (such as python, make, etc).
- Ignoring specific files or directories.
- Watch specific directories.
- Works with server applications or one time run utilities and REPLs.
- Requirable in node apps.
- Open source and available on github.

[Nodemon Homepage](http://nodemon.io/)

#### Installation

`npm install -g nodemon`

#### Usage

`nodemon index.js`
