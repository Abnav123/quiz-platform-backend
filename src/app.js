const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Quiz Platform API Running");
});

app.use("/api/auth", authRoutes);

module.exports = app;

const testRoutes = require("./routes/testRoutes");

app.use("/api/test", testRoutes);

const quizRoutes = require("./routes/quizRoutes");
app.use("/api/quizzes", quizRoutes);