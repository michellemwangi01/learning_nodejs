const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // this is what allows us to access req.body
const userRouter = require("./routes/users");
const postsRouter = require("./routes/posts");

app.use("/users", userRouter);
app.use("/posts", postsRouter);

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});

// Home page API
app.get("/api/home", (req, res) => {
  res.status(200);
  res.json({ message: "Hello you!" });
});

// User Routes

// ---------------------- USING FILES ----------------------
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
//   res.setHeader("Content-Type", "text/plain");
//   fs.readFile("./docs/longText.txt", (err, data) => {
//     if (err) {
//       console.log(err);
//       res.statusCode = 500;
//       res.end("Error reading file");
//     } else {
//       res.statusCode = 200;
//       res.end(data);
//     }
//   });
// });

// server.listen(3000, "localhost", () => {
//   console.log("server now listening to port 3000");
// });
