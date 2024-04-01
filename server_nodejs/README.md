## Create the package.json

specify the entry point: server.js

## Connecting backend(Node) to frontend(Next)

### Install Node

1. Make sure NodeJs is installed `node --version`
2. Create the package.json by running the command`npm init`
3. Add these scripts to the package.json under "scripts" `"start": "node server",
"dev": "nodemon server"`
4. Run the server using `npm run dev` to run as a developer, otherwise run with `npm run`

### Setup the backend server with express

- Install express `npm i express`
- ````const express = require("express");
  const app = express();```
  ````
- start the server `app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});`

### Setup CORS

- Setup cors to allow the frontend server to talk to the backend - `npm i cors`
- Add to the server or entry point file.
- ````const cors = require("cors");
  app.use(cors());```
  ````

### Define your endpoints

- Example:

```
app.get("/api/home", (req, res) => {
  res.json({ message: "Hello you!" });
  });
```
