const express = require("express");
const app = express();

const mongoose = require("mongoose");
// const userSchema = require("./models/userModel");
const userRouters = require("./routes/userRouters");
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");

app.use(express.json());
mongoose.connect(
  "mongodb://localhost:27017/assignment8db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("Connected to db");
    } else {
      console.log("Error with connection");
    }
  }
);

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use("/api/create", userRouters);
app.use("/api/edit", userRouters);
app.use("/api/delete", userRouters);
app.use("/api/getAll", userRouters);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started running on PORT ${PORT}`));
