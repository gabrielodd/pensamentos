const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const flash = require("express-flash");

const app = express();

const conn = require("./db/conn");

// Models
const Tought = require("./models/Tought");

// routes
const toughtsRoutes = require("./routes/toughtsRoutes");
const authRoutes = require("./routes/authRoutes");
const ToughController = require("./controllers/ToughtController");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(flash());

app.use(express.static("public"));

//app.use("/toughts", toughtsRoutes);
//app.use("/", authRoutes);

//app.get("/", ToughController.showToughts);

conn
  .sync()
  .then(() => {
    app.listen(8888);
  })
  .catch((err) => console.log(err));