// importing express framework
const express = require("express");

const app = express();

// Respond with "hello world" for requests that hit our root "/"
app.get("/", function (req, res) {
return res.send("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum purus elit, quis efficitur lorem porta nec. In hac habitasse platea dictumst. Maecenas rhoncus tincidunt cursus. Ut congue massa a nibh imperdiet lacinia. Suspendisse tincidunt elit libero, a convallis nibh eleifend sit amet. Aenean feugiat eu neque eu dapibus. Phasellus consectetur lobortis felis, auctor pharetra est scelerisque ut. Donec vitae mauris porta, luctus nisl nec, commodo erat. Etiam pretium tortor risus, eget elementum felis mattis eget.");
});

// listen to port 3100 by default
app.listen(process.env.PORT || 3100, () => {
console.log("Server is running");
});

module.exports = app;
