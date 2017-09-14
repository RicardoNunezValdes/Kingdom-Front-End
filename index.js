var express = require("express");
var morgan = require("morgan");
var browserSync = require("browser-sync");

var app = express();

// Logger configuration
app.use(morgan("combined"));
// Configure express as static file server
app.use(express.static("app"));

// Configuration for the response handler 
var options = { root: __dirname + "/app/" };

// Any request to a path without a static file will return the index file
app.get("*", (req, res) => res.sendFile("index.html", options)); // load the single view file (angular will handle the page changes on the front-end)

// Initiate server on port 3000
app.listen(3000, OnInitServer);

function OnInitServer()
{
    console.log("Demo server available on http://localhost:3000");

    // Configure the browser hot reload by opening a proxy to the actual server
    browserSync(
    {
        files: ["app/**/*.{html,js,css}"],
        online: false,
        open: false,
        port: 3000,
        proxy: "localhost:" + 3000,
        ui: false
    });
}