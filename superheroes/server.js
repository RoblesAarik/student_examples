const express = require("express");

const app = express();

const port = 3000;

const superheroes = [
  {
    name: "Superman",
    powers: ["flight", "invulernability", "laser vision"],
  },
  {
    name: "Wonder Woman",
    powers: ["Super Strength", "Lasso of Truth"],
  },
  {
    name: "Black Pather",
    powers: ["Cool Super Suit", "Enhanced Physical Abilites"],
  },
];

const villains = [
  {
    name: "Lex Luthor",
    powers: ["super brain"],
  },
  {
    name: "Ares",
    powers: ["shape shifting", "teleporting"],
  },
  {
    name: "Killmonger",
    powers: [
      "ability to fit in Black Panther's suit",
      "internet agreement that he looks badass",
    ],
  },
];

app.get("/superheroes", (req, res) => {
  res.send(superheroes);
});

app.get("/superheroes/:index", (req, res) => {
  res.send(
    `<html>
      <body>
      <h1>${superheroes[req.params.index].name}<h1>
      <ul>
      <li>${superheroes[req.params.index].powers[0]}
      <li>${superheroes[req.params.index].powers[1]}
      <ul>
      <body>
      <html>`
  );
});

app.listen(port, () => {
  console.log("listening on port", port);
});
