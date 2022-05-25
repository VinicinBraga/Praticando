const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Fala Zeze!<h1>");
  }
  if (req.url === "/blz") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Beleza, cara!<h1>");
  }
  if (req.url === "/users") {
    const users = [
      {
        name: "Thiago Neves",
        email: "Tneves@zero.com",
      },
      {
        name: "Zezé Perrela",
        email: "zeze@perrela.com",
      },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () =>
  console.log(`Server running at http://127.0.0.1:${port}/`)
);
