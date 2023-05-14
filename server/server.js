const express = require("express");
const cors = require("cors");
const port = 5000;
const pool = require("./db");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api", async(req, res) => {
  try {
    const user = await pool.query("SELECT * FROM employee");
    res.status(201).json({
      message: `success`,
      data: user.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
