import express from "express";
import usersRoutes from "./routes/users.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
