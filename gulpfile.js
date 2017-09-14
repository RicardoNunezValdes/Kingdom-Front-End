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

// folders
folder = {
    src: "src/app",
    dist: "dist/"
};

gulp.task("default", ["clean-dist", "watch"], function()
{
    gulp.start("build");
});
gulp.task("build", ["build-html", "build-js"]);
gulp.task("build-html", BuildHtml);
gulp.task("build-js", BuildJs);
gulp.task("clean-dist", () => del(["dist/"]));

function BuildJs()
{
    var orderConfiguration = { types: ["module", "model", "service", "controller", "directive", "filter", "routes", "config"] };
    var destFileName = "app.js";
    var srcFilesPattern = folder.src + "/**/*.js";
    var destination = folder.dist + "js/";

    var jsbuild = gulp.src(srcFilesPattern)
                      .pipe(newer(destination))
                      .pipe(angularOrder(orderConfiguration))
                      .pipe(concat(destFileName));

    if (config.minifyFiles)
        jsbuild = jsbuild.pipe(stripdebug())
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

    if (config.minifyFiles)
        htmlBuild = htmlBuild.pipe(htmlclean());

    return htmlBuild.pipe(gulp.dest(out))
                    .pipe(livereload());
}

gulp.task("watch", function() 
{
    livereload.listen({ start: true });
    gulp.watch(folder.src + "/**/*.html", ["build-html"]);
    gulp.watch(folder.src + "/**/*.js", ["build-js"]);
});