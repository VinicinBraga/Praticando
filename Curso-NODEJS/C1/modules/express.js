const express = require("express");
const { Person } = require("../person");
const app = express();
const port = 3000;
const person = new Person("Vinicius");

app.get("/home", (req, res) => res.status(200).send(`Hi, ${person.name}!!`));
app.get("/users", (req, res) => {
  const users = [
    {
      name: "Thiago Neves",
      email: "Tneves@zero.com",
    },
    {
      name: "Zezé Perrela",
      email: "zeze@perrela.com",
    },
  ];
  res.status(200).json(users);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
