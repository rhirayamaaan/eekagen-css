var gulp = require("gulp");
var sass = require("gulp-sass");

sass.compiler = require("node-sass");

gulp.task("sass", () => {
  gulp.watch("./src/scss/*.scss", () => {
    return gulp
      .src("./src/scss/*.scss")
      .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
      .pipe(gulp.dest("./src/css"));
  });
});

gulp.task("watch", gulp.series("sass"));
