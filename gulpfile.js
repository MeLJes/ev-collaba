const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('default', function () {
    // Browser Sync
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    // Track changes
    gulp.watch(['**/*.js', '**/*.html'], function () {
        browserSync.reload();
    });
});