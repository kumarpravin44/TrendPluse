const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("TrendPluse Backend Running 🚀");
});

app.get("/api/news", (req, res) => {
    res.json({
        status: "success",
        articles: [
            { title: "India Budget 2026 Highlights" },
            { title: "Tech Layoffs Update" }
        ]
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
