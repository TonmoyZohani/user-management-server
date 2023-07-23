const express = require("express");
const app = express();
const cors = require("cors");

// middlewares
app.use(cors());
app.use(express.json());

const port = 5000;

const users = [
  {
    name: "John Doe",
    id: 1,
    email: "john.doe@example.com",
  },
  {
    name: "Jane Smith",
    id: 2,
    email: "jane.smith@example.com",
  },
  {
    name: "Alice Johnson",
    id: 3,
    email: "alice.johnson@example.com",
  },
  {
    name: "Bob Anderson",
    id: 4,
    email: "bob.anderson@example.com",
  },
  {
    name: "Emily Davis",
    id: 5,
    email: "emily.davis@example.com",
  },
];

app.get("/", (req, res) => {
  res.send("Users management is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("Post API hitting.");
  console.log(req.body);

  const newUser = req.body;
  newUser.id = users.length + 1;

  users.push(newUser);
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
