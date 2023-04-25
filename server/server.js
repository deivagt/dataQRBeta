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
app.use("/api", workers);

app.get("/", (req,res)=>{
  res.send('Api is running')
})
mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.error(error))

mongoose.connection.on('open', function () {
  mongoose.connection.db.listCollections(function (error, names) {
    if (error) {
      throw new Error(error);
    } else {
      names.map(function (name) {
        console.log('found collection %s', name);
      });
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});