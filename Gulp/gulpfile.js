var exec = require('child_process').exec;
var gulp = require('gulp');

gulp.task('ls', function () {

  exec('ls', function (err, stdout, stderr) {
    console.log(stdout);
  });
});
