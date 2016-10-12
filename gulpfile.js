'use strict';

var gulp = require('gulp');

//define a task; this can be executed by running "gulp hello" from the terminal CLI
gulp.task("hello", function () {
    console.log("Hello from a gulp task!");
});

//define the default gulp task that is run by typing "gulp" at the terminal CLI
//the array passed as the 2nd parameter is the list of tasks (dependencies)
//that will be executed before running the default task
gulp.task("default", ["hello"], function () {
    console.log("This is the default gulp task.");
});