const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get((req, res) => res.send("Hi there"));

// Listening to the PORT
app.listen(port, () => console.log(`Listening to the port ${port}`));
