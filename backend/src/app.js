const express = require("express");
const httpStatus = require("http-status");
const routes = require("./routes");
const ApiError = require("./utils/ApiError");
const app = express();

// parse json request body
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Reroute all API request starting with "/v1" route
app.use("/v1", routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

module.exports = app;
