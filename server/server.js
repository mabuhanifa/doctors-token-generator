const express = require("express");
const cors = require("cors");
const port = 5000;
const pool = require("./db");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api", (req, res) => {
  console.log(req.body);
  res.send({
    message: 'successfully subscribed',
    success: true,
  });
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
