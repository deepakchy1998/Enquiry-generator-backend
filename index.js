const express = require("express");
const mongoose = require("mongoose");
const enquiryRoutes = require("./App/routes/web/userEnquiryRoutes");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/',enquiryRoutes);
// Mount the enquiry routes
app.use("/api/web/enquiry", enquiryRoutes);

// Connect to MongoDB and start server after successful connection
mongoose
  .connect(process.env.DBURL, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
