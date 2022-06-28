const express = require("express");
const { Person } = require("../person");
const UserModel = require("../src/models/user.model");

const app = express();

app.use(express.json());

const person = new Person("Vinicius");

app.get("/home", (req, res) => res.status(200).send(`Hi, ${person.name}!!`));

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
