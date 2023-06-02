const express = require("express");
const dotenv = require("dotenv");
const newrelic = require("newrelic");

const app = express();

dotenv.config();

app.set("port", process.env.PORT);
app.set("json spaces", 2);

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    Title: "Hello World to my monitored api",
  });
});

app.get("/ping", (req, res) => {
  newrelic.incrementMetric('Ping/NumberOfCalls', 1);
  res.send("Pong");
});

//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
  console.log(`Server listening on port ${app.get('port')}`);
});
