const express = require("express");
const app = express();
const cors = require("cors");

const Route = require("./routes/api");

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use("/api", Route);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
