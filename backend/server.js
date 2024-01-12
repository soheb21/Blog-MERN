require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { connectDB } = require("./config/DB");

//middleware
app.use(express.json());
app.use(cors());

//Connecting with Database
connectDB();

//Routes
app.use("api/v1/user", require("./routes/userRoutes"));
app.use("api/v1/blog", require("./routes/blogRoute"));
app.use("api/v1/blogProfile", require("./routes/blogProfileRoute"));
app.use("api/v1/admin", require("./routes/adminRoute"));






const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server is running at ${PORT}`))