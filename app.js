const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const {url, method } = req;
  if (url === "/") {
    res.write(`
    <html>
      <head>
        <title>Input form</title>
      </head>
      <body>
        <form action="/message" method="post">
          <input type="text" name="message">
          <button type="submit">Send</button>
        </form>
      </body>
    </html>
    `);
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    })
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log(parsedBody)
      fs.writeFileSync('message.txt', message);
      res.statusCode = 302;
      res.setHeader('Location', '/home')
      res.end()
    })
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head>
        <title>Message</title>
      </head>
      <body>
        <h1>Heloo!</h1>
      </body>
    </html>`);
    res.end();
});

server.listen(3000);
