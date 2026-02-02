import React, { useEffect, useState } from "react";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/news")
      .then(res => res.json())
      .then(data => setNews(data.articles));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>📰 TrendPluse News</h1>

      <ul>
        {news.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
