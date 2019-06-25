const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
// create the express app
const app = express();
// create middleware to handle the serving the app
app.use("/", serveStatic(path.join(__dirname, "/public")));
// Create default port to serve the app on
const port = process.env.PORT || 80;
app.listen(port);
// Log a feedback that this is actually running
console.log("Server started on port " + port);
