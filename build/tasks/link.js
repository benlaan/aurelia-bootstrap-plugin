var gulp = require('gulp');
var shell = require('gulp-shell');

var jspmLinkCommand = 'jspm link github:benlaan/aurelia-bootstrap-plugin -y';

gulp.task('link', ['build'], shell.task([jspmLinkCommand], {verbose: true}));

