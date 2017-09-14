var express = require("express");
var morgan = require("morgan");
var browserSync = require("browser-sync");
var config = require("./src/conf/config");
var app = express();

InitializeApp();

// Logger configuration
app.use(morgan(config.logger));

function InitializeApp()
{
    ConfigureExpress();
    StartServer();
}

function ConfigureExpress()
{
    // Configure express as static file server
    app.use(express.static("dist"));

    // Configuration for the response handler 
    var options = {
        root: __dirname + "/dist/"
    };

    // Any request to a path without a static file will return the index file
    app.get("*", (req, res) => res.sendFile("views/index.html", options)); // load the single view file (angular will handle the page changes on the front-end)   
}

function StartServer()
{
    // Initiate server on port 3000
    app.listen(config.PORT, OnInitServer);
}

function OnInitServer()
{
    console.log("Demo server available on http://localhost:" + config.PORT);

    // Configure the browser hot reload by opening a proxy to the actual server
    // browserSync(
    // {
    //     files: ["src/**/*.{html,js,css}"],
    //     online: false,
    //     open: false,
    //     port: config.PORT,
    //     proxy: "localhost:" + config.PORT,
    //     ui: false
    // });
}