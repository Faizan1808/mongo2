const express = require("express");
const bodyParser = require("body-parser");
const employeeRouter = require("./routes/employee");

const app = express();

app.use(bodyParser.json());
app.use(employeeRouter);

app.listen(8080, () => {
    console.log("server started")
})