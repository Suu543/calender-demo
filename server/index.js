const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config();

// 3rd party modules
app.use(logger("dev"));
app.use(helmet());
app.use(cors());

// Public Path
app.use(express.static("public"));

// Read and Parse Body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

// Listening PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
