const app = require("express")();

app.use("/", (req, res, next) => {
    req.headers["test-header"] = 1234;
    next();
});