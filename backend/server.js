const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { connectDB } = require("./config/DB");

//middleware
app.use(express.json());
app.use(cors());



//Routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/blog", require("./routes/blogRoute"));
app.use("/api/v1/blogProfile", require("./routes/blogProfileRoute"));
app.use("/api/v1/admin", require("./routes/adminRoute"));




//Connecting with Database
connectDB();

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server is running at ${PORT}`))