const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const videoRoutes = require("./routes/videoRoutes");

const verifyToken = require("./middleware/authMiddleware");

const app = express();

// middleware
app.use(
  cors({
    origin: "https://mern-ecommerce-gamma-murex.vercel.app",
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/auth",authRoutes);

app.use("/api/videos", videoRoutes);

// Test route
app.get("/",(req,res) => {
    res.send("API running successfully");
});




app.get("/protected", verifyToken, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});

// Port
const PORT = process.env.PORT || 5000;

// mongodb connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Mongodb connected");

        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });