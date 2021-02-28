const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("express-async-errors");

const config = require("./utils/config");
const app = express();
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");

const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const blogRoutes = require("./controllers/blog");

logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.static("build"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(middleware.tokenExtractor);
app.use(middleware.requestLogger);

app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);
app.use("/api/blogs", middleware.tokenExtractor, blogRoutes);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
