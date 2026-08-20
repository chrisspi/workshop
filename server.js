import express from "express";
const app = express();

app.get("/", (_, res) => res.send("Hello from Dockerized!"));
app.get("/test", (_, res) => res.send("Test!"));
app.listen(3000, () => console.log("Server läuft auf Port 3000"));
