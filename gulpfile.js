// Import the needed modules
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

// Function to compile html
function compileHtml() {
  return gulp
    .src("./html/**/*.html")
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream());
}

// Function to compile sass and add css prefixes
function compileSass() {
  return gulp
    .src("scss/**/*.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(gulp.dest("./build"))
    .pipe(browserSync.stream());
}

// Function to concatenate js files
function gulpJS() {
  return gulp
    .src("js/**/*.js")
    .pipe(concat("index.js"))
    .pipe(
      babel({
        presets: ["env"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("./build"))
    .pipe(browserSync.stream());
}

// Function to init browser
function browser() {
  browserSync.init({
    server: {
      baseDir: "./build",
    },
  });
}

// Set gulp to watch this files
function watch() {
  gulp.watch("html/**/*.html", compileHtml);
  gulp.watch("scss/**/*.scss", compileSass);
  gulp.watch("js/**/*.js", gulpJS);
  // gulp.watch('js/plugins/*.js', pluginJS);
  gulp.watch(["*.html"]).on("change", browserSync.reload);
}

// Gulp tasks config
exports.compileHtml = compileHtml;
exports.compileSass = compileSass;
exports.gulpJS = gulpJS;
exports.browser = browser;
exports.watch = watch;

exports.dev = gulp.parallel(
  compileHtml,
  compileSass,
  gulpJS,
  watch,
  browser,
);

exports.build = gulp.parallel(
  compileHtml,
  compileSass,
  gulpJS,
)
