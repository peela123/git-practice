import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("main pagesd");
});
app.get("/about", (req, res) => {
  res.status(200).json({ message: "about page" });
});

app.get("/info", (req, res) => {
  res.status(200).json({ message: "info page" });
});

app.listen(PORT, () => {
  console.log("express server listen to port:", PORT);
});
