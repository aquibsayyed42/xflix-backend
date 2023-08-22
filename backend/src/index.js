const mongoose = require("mongoose");
const config = require("./config/config");
const app = require("./app");
const port = 8082
let server;

mongoose
    .connect(config.mongoose.url, config.mongoose.options)
    .then(() => {
        app.listen(config.port, () => {
            console.log(`App started`);
        });
    })
    .catch((e) => {
        console.log(e); 
      });
