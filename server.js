const jsonServer = require("json-server");

const cors = require("cors");

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

app.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.options("*", cors());
app.use(router);

app.listen(4000, () => {
  console.log("JSON Server is running...");
});

module.exports = app;
