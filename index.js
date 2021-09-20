const http = require("http");
const app = require("./app");

app.set("port", process.env.PORT || 3000);
const server = http.createServer(app);

server.listen(process.env.PORT || 3000);

// const express = require("express");
// const userRoute = require("./route");

// const CON_STRING =
//   "mongodb+srv://pass:<password>@cluster0.n3vlc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// const app = express();

// const PORT = 7000;

// app.use(express.json());

// app.listen(PORT, () => console.log(`this app is listening on port ${PORT}`));

// app.use("/new", userRoute);

// app.use("/", (req, res) => {
//   res.json({ mrssage: "app up!" });
// });

// // app.post('/new', (req, res) => {
// //    const
// // })
