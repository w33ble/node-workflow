---
title: "Starting a Project"
description: "Steps to take when you start your Node project"
order: 25
---

## Version Control

Version control is handy, whether you're working with others or not. `git` is the One True Way™.

`git init`

## Package Creation

In Node, all projects are packages, yours is no exception. We'll use `npm` to create a `package.json` file, which will keep details about our package and its dependencies.

`npm init`

[This interactive guide](http://package.json.nodejitsu.com/) is a nice source of more info you can add to your `package.json` file.

## Ignored Files

Add a `.gitignore` file to prevent checking in some files and paths to your project.

Github offers a pretty decent list, but here's a list to get you started; simply copy and paste into your `.gitignore` file.

````
.DS_Store
*.swp
logs
*.log
node_modules
bower_components
````