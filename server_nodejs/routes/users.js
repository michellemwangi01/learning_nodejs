const express = require("express");
const { users } = require("../modules");
const router = express.Router();

// Use the middleware for all the routes of usertype
router.use(pathlogger);

// remember to place dynamic routes after all the sttaic routes to avoid confusion
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/addUser", (req, res) => {
  const newUser = { ...req.body, ID: users.length + 1 };
  users.push(newUser);
  console.log(newUser);
  res.status(200).json({ message: "User added successfully", newUser });
});

//  The code above can be achieved by grouping it all together using router.route because the paths are all the same.
router
  .route("/:user_id")
  .get((req, res) => {
    let userId = req.params.user_id;
    res.send(req.user);
  })
  .put((req, res) => {
    let userId = req.params.user_id;
    res.send("put new user " + userId);
  })
  .patch((req, res) => {
    let userId = req.params.user_id;
    res.send("edit details about user " + userId);
  })
  .delete((req, res) => {
    let userId = req.params.user_id;
    res.send("delete a user " + userId);
  });

// Example#1 of MIDDLEWARE, middleware runs in between when the req is made and the response is received
router.param("user_id", (req, res, next, user_id) => {
  const user = users.find((user) => user.ID === parseInt(user_id));
  if (!user) {
    return res.status(404).send("User not found");
  }
  req.user = user;
  console.log(req.user);
  next();
});

// Example#2 of MIDDLEWARE
function pathlogger(req, res, next) {
  //   console.log(req.originalUrl);
  next();
}
module.exports = router;
