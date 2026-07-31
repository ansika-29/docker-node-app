const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(`
        <h1>Welcome to My Dockerized Node.js Application</h1>
        <p>This application is running successfully inside a Docker container on AWS EC2.</p>
    `);

    res.end();
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
