require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const workers = require("./routes/workers")
const port = process.env.PORT || 5000;



//////
const app = express();
app.use(cors());
app.use(express.json());

/*
mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.error(error))


*/

app.get("/", (req,res)=>{
  res.send('Api is running')
})

/*
app.use("/api", workers);
*/


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});