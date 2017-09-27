var express = require("express");
var morgan = require("morgan");
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
    app.use("/static", express.static("static"));

    // Add fav icon to express routing
    app.use("/favicon.ico", express.static("favicon.ico"));

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
}