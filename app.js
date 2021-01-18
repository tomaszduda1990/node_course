const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Node res page</title></head>");
    res.write(
      "<body><form method='POST' action='/message'><label for='input' name='name'>Enter name</label><input id='input' type='text' /><input type='submit' value='submit' /></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (method === "POST" && url === "/message") {
    fs.writeFileSync("new_user.txt", "this is a file");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.write("<html>");
  res.write("<head><title>Node res page</title></head>");
  res.write("<body><h1>your data is saved</h1></body>");
  res.write("</html>");
  res.end();
  //   process.exit();
});

server.listen(3000);
