const app = require("express")();


var listener_port = 9999


// Main API lightweight response
app.get("/", (req, resp) =>
    resp.send("Hello from a light weight nodeapp"))

// Start listening on listener_port
app.listen(listener_port, () => console.log("Started listening for API requests on port " + listener_port))