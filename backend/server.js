const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// API
app.get("/api/news", (req, res) => {
    res.json({
        status: "success",
        articles: [
            { title: "India Budget 2026 Highlights" },
            { title: "Tech Layoffs Update" }
        ]
    });
});

// Serve frontend (after build)
app.use(express.static(
    path.join(__dirname, "../frontend/dist")
));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log("Server running on port", PORT)
);
