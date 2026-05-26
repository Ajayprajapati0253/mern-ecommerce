const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth",authRoutes);

// Test route
app.get("/",(req,res) => {
    res.send("API running successfully");
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