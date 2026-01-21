import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("main pagesd");
});

app.listen(PORT, () => {
  console.log("express server listen to port:", PORT);
});
