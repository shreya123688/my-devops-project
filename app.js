const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({status: "healthy"}));
  } else {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({
      message: "My DevOps Project",
      version: "1.0.0",
      timestamp: new Date().toISOString()
    }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});console.log("🎉 Feature added!");
