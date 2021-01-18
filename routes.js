const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Node res page</title></head>");
    res.write(
      "<body><form method='POST' action='/message'><label for='message' >Enter name</label><input id='message' name='message' type='text' /><input type='submit' value='submit' /></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (method === "POST" && url === "/message") {
    const body = [];
    let message;
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      message = parsedBody.split("=")[1];
      fs.writeFile("new_user.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node res page</title></head>");
  res.write("<body><h1>your data is saved</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;
