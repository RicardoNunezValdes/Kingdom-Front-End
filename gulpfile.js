// Gulp.js configuration
var gulp = require("gulp"),
    newer = require("gulp-newer"),
    htmlclean = require("gulp-htmlclean"),
    concat = require("gulp-concat"),
    stripdebug = require("gulp-strip-debug"),
    uglify = require("gulp-uglify"),
    angularOrder = require("gulp-angular-order");

    // development mode?
    devBuild = (process.env.NODE_ENV !== "production");
// set NODE_ENV=production

// folders
folder = {
    src: "src/app",
    build: "build/"
};

gulp.task("default", ["html", "js"]);

// HTML processing
gulp.task("html", function()
{
    var out = folder.build + "html/";
    var page = gulp.src(folder.src + "/**/*.html")
        .pipe(newer(out));

    if (!devBuild)
        console.log("devbuild");
    else
        console.log("devbuild2");
    
    // minify production code
    // if (!devBuild)
        // page = page.pipe(htmlclean());

    return page.pipe(gulp.dest(out));
});

// JavaScript processing
gulp.task("js", function()
{
    var types = ['module', 'model', 'service', 'controller', 'directive', 'filter', 'routes', 'config'];

    var jsbuild = gulp.src(folder.src + "/**/*.js")
        .pipe(angularOrder({ types: types }))
        .pipe(concat("app.js"));

    // if (!devBuild)
    // {
    // jsbuild = jsbuild
    //     .pipe(stripdebug())
    //     .pipe(uglify());
    // }

    return jsbuild.pipe(gulp.dest(folder.build + "js/"));
});