var express = require("express");
var app = express();
var port = 3000;

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});
app.listen(port, () => {
  console.log("Server listening on port" + port);
});