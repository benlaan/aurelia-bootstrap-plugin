var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', function() {
  gulp.watch(paths.source, ['link']).on('change', reportChange);
  gulp.watch(paths.html, ['link']).on('change', reportChange);
  gulp.watch(paths.css, ['link']).on('change', reportChange);
  gulp.watch(paths.style, ['link']).on('change', reportChange);
});
