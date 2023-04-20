import Express from "express";
const app = Express();

app.get("/", (req, res) => {
  res.json("Hello");
});

app.listen(4000, () => {
  console.log("Hello");
});
