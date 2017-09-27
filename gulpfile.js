// Gulp.js configuration
var gulp = require("gulp");
var newer = require("gulp-newer");
var htmlclean = require("gulp-htmlclean");
var concat = require("gulp-concat");
var stripdebug = require("gulp-strip-debug");
var uglify = require("gulp-uglify");
var angularOrder = require("gulp-angular-order");
var config = require("./src/conf/config");
var livereload = require("gulp-livereload");
var del = require("del");
var inject = require("gulp-inject");
var angularFileSort = require("gulp-angular-filesort");

// folders
folder = {
    src: "src/app",
    dist: "dist/",
    static: "src/static"
};

gulp.task("default", ["clean-dist"], () => gulp.start("build"));
gulp.task("build", ["watch", "build-js", "build-css"], () => gulp.start("build-html"));
gulp.task("build-html", ["build-views"], () => gulp.start("inject-scripts"));
gulp.task("build-views", BuildHtml);
gulp.task("build-js", BuildJs);
gulp.task("build-css", BuildCss);
gulp.task("clean-dist", () => del(["dist/"]));
gulp.task("watch", WatchFiles);
gulp.task("inject-scripts", InjectScripts);

function BuildJs()
{
    var orderConfiguration = {
        types: ["module", "model", "service", "controller", "directive", "filter", "routes", "config"]
    };
    // var destFileName = "app.js";
    var destFileName = "app" + Date.now() + ".js";
    var srcFilesPattern = folder.src + "/**/*.js";
    var destination = folder.dist + "js/";

    var jsbuild = gulp.src(srcFilesPattern)
        .pipe(newer(destination))
        .pipe(angularOrder(orderConfiguration))

    if (config.minifyFiles)
        jsbuild = jsbuild.pipe(concat(destFileName))
        .pipe(stripdebug())
        .pipe(uglify());

    return jsbuild.pipe(gulp.dest(destination))
        .pipe(livereload());
}

function BuildHtml()
{
    var out = folder.dist + "views/";
    var srcFilesPattern = folder.src + "/**/*.html";

    var htmlBuild = gulp.src(srcFilesPattern)
        .pipe(newer(out));

    // if (config.minifyFiles)
    //     htmlBuild = htmlBuild.pipe(htmlclean());

    return htmlBuild.pipe(gulp.dest(out))
        .pipe(livereload());
}

function BuildCss()
{
    var out = folder.dist + "css/";
    var srcFilesPattern = folder.static + "/**/*.css";
    var destFileName = "app.css";

    return gulp.src(srcFilesPattern)
        .pipe(newer(out))
        .pipe(concat(destFileName))
        .pipe(gulp.dest(out))
        .pipe(livereload());
}

function InjectScripts()
{
    var target = gulp.src(folder.dist + "/views/index.html");
    // It"s not necessary to read the files (will speed up things), we"re only after their paths:
    var sources = gulp.src([folder.dist + "js/**/*.js"])
        .pipe(angularFileSort());

    return target.pipe(inject(sources))
        .pipe(gulp.dest(folder.dist + "/views"));
}

function WatchFiles()
{
    livereload.listen();

    gulp.watch(folder.src + "/**/*.html", ["build-html"]);
    gulp.watch(folder.src + "/**/*.js", ["build-js"]);
    gulp.watch(folder.static + "/**/*.css", ["build-css"]);
}