const app = require("./src/app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`CLEAN AUTH SERVER RUNNING ON PORT ${PORT}.`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the Clean Auth API!");
});
