// importing express framework
const express = require("express");

const app = express();

// Respond with "hello world" for requests that hit our root "/"
app.get("/", function (req, res) {
return res.send("Hello World, Desmond here! Live from Github server! Now moving to JENKINS");
});

// listen to port 3100 by default
app.listen(process.env.PORT || 3100, () => {
console.log("Server is running");
});

module.exports = app;
