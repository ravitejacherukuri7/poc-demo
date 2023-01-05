const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config/config");
const routeRouters = require("./routes/api/route");

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Succes! MongoDB connected!!"))
  .catch((e) => console.log(e));

app.use("/api/route", routeRouters);

app.listen(PORT, () => {
  console.log("Server run on port " + PORT);
});
