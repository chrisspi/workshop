import express from "express";
const app = express();

app.get("/", (_, res) => res.send("Hello from Dockerized Node!"));
app.listen(3000, () => console.log("Server läuft auf Port 3000"));
