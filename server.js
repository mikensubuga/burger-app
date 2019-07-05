const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
// create the express app
const app = express();

if (process.env.NODE_ENV === "production") {
  // create middleware to handle the serving the app
  app.use("/", serveStatic(path.join(__dirname, "/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/build", "index.html"));
  });
}

// Create default port to serve the app on
const port = process.env.PORT || 80;
app.listen(port);
// Log a feedback that this is actually running
console.log("Server started on port " + port);
