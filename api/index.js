const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const cors = require("cors");

dotenv.config();


mongoose.connect(
  process.env.MONGO_URL
  )
  .then(() => console.log("DB connection successful"))
  .catch((err) => {console.log(err)});

app.use(cors())
app.use(express.json());
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);

app.listen(5000, () => {
  console.log("SERVER RUNNING");
});