var gulp = require("gulp");
var browserSync = require("browser-sync").create();
gulp.task("default", function(){
    gulp.watch(['employee/app/employee/**/*.js']).on("change", browserSync.reload);

    browserSync.init({
        server: "./"
    })
});

browserSync.stream();
