var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compilerTsOptions = require('../typescript-options');
var assign = Object.assign || require('object.assign');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var typescript = require('gulp-typescript');
var filenames = require('gulp-filenames');
var jeditor = require('gulp-json-editor');
var slash = require('slash');

var compileToModules = ['es2015', 'commonjs', 'amd', 'system'];

compileToModules.forEach(function(moduleType){
  // transpiles source into each module type
  // the plumber() call prevents 'pipe breaking' caused
  // by errors from other gulp plugins
  // https://www.npmjs.com/package/gulp-plumber
  gulp.task('build-ts-' + moduleType, function () {
    var tsProject = typescript.createProject(
      compilerTsOptions({ module: moduleType, target: moduleType == 'es2015' ? 'es2015' : 'es5' }), typescript.reporter.defaultReporter());

    return gulp.src(paths.dtsSrc.concat(paths.source))
      .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
      .pipe(changed(paths.output, {extension: '.ts'}))
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(typescript(tsProject))
      .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '/src'}))
      .pipe(gulp.dest(paths.output + moduleType));
  });

  // copies changed html files to the output directory
  gulp.task('build-html-' + moduleType, function() {
    return gulp.src(paths.html)
      .pipe(changed(paths.output, {extension: '.html'}))
      .pipe(gulp.dest(paths.output + moduleType));
  });

  // copies changed css files to the output directory
  gulp.task('build-css-' + moduleType, function() {
    return gulp.src(paths.css)
      .pipe(changed(paths.output, {extension: '.css'}))
      .pipe(gulp.dest(paths.output + moduleType))
      .pipe(browserSync.stream());
  });
});

// prepares a list of resources
gulp.task('generate-resources', function() {
  return gulp.src(paths.html)
    .pipe(filenames('resources'));
});

// writes list of resources to package.json
gulp.task('build-resources', [ 'generate-resources' ], function() {
  return gulp.src('./package.json')
    .pipe(jeditor(function(json) {
      json.aurelia = json.aurelia || {};
      json.aurelia.build = json.aurelia.build || {};
      json.aurelia.build.resources = filenames.get('resources').map(slash);

      return json;
    }))
    .pipe(gulp.dest('./'));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-system', 'build-html', 'build-css', 'build-resources'],
    callback
  );
});

var buildAll = compileToModules
    .map(function(moduleType) { return 'build-ts-' + moduleType })
  .concat(compileToModules
    .map(function(moduleType) { return 'build-html-' + moduleType }))
  .concat(compileToModules
    .map(function(moduleType) { return 'build-css-' + moduleType }));

gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    buildAll,
    callback
  );
});