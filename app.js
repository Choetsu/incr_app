const express = require("express");
const redis = require("redis");

const app = express();
const port = 5000;

const client = redis.createClient({
  url: "redis://redis:6379",
});
(async () => await client.connect())();

client
  .on("connect", () => {
    console.log("Connecté à Redis");
  })
  .on("error", (err) => {
    console.log(err);
  })
  .set("hits", 0);

app.listen(port, () => {
  console.log(`Le serveur est accessible sur http://localhost:${port}`);
});

app.get("/", async function (req, res) {
  client.incr("hits");
  const getHits = await client.get("hits");
  res.end(`<h1>Bonjour, cette page compte ${getHits} visites</h1>`);
});
