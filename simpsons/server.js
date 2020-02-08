const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/Homer", (req, res) => {
  res.send();
});

app.get("/Marge", (req, res) => {
  res.send();
});

app.get("/Bart", (req, res) => {
  res.send();
});

app.get("/Lisa", (req, res) => {
  res.send();
});

app.get("/Maggie", (req, res) => {
  res.send();
});

app.get("/SnowballII", (req, res) => {
  res.send();
});

app.get("/SantasLittleHelper", (req, res) => {
  res.send(
    `<html>
      <body>
        <h1>Oh ha!</h1>
      </body>
    </html>`
  );
});
app.listen(3000, () => {
  console.log("listening");
});
