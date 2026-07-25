const http = require("http");

function greet(name) {
  if (!name) {
    throw new Error("name cannot be empty");
  }
  return `Hello, ${name}!`;
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(greet("World") + "\n");
});

const PORT = 3000;

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = { greet };
