const express = require("express");
const connected = require("./db");
var cors = require("cors");
const PORT = process.env.PORT || 8000;
connected();
app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  console.log("Hello");
});
app.use("/api/register", require("./routes/register"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/team", require("./routes/team"));
app.use("/api/participants", require("./routes/participants"));
app.use("/api/project", require("./routes/project"));

app.listen(8000, () => {
  console.log(`Listening at port 8000`);
});
