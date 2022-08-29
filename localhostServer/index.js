const fs = require("fs");
const express = require("express");
const chalk = require("chalk");

const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 5000;

app.get("/", (req, res) => {
  fs.readFile(`../src/page/${req.query.name}.md`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(data.toString());
  });
});
app.listen(port, () => {
  console.log(`服务器运行在:${chalk.green("http://localhost:" + port)}`);
});
