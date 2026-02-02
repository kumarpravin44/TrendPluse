const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// API route
app.get("/api/news", (req, res) => {
    res.json({
        status: "success",
        articles: [
            { title: "India Budget 2026 Highlights" },
            { title: "Tech Layoffs Update" }
        ]
    });
});

// Serve frontend build
const frontendPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendPath));

// ❌ REMOVE app.get("*")

// ✅ SAFE fallback
app.use((req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
