const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 3000;
const app = express();
app.use(cors())
app.use(bodyParser.json());

const apiRoute = require("./routes/api");
//Middewares
app.use("/api", apiRoute);
//connect to DB

mongoose.connect(
  "mongodb+srv://Zahid:zahid@eventlab-incah.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db ...");
  }
);
app.get("/", (req, res) => {
  res.send("Hello from Server");
});

app.listen(PORT, () => {
  console.log("Server running on local host: " + PORT);
});
