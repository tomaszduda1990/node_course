const welcomeHtml = `
    <html>
        <head>
            <title>Welcome page</title>
        </head>
        <body>
            <h1>HI this is users page</h1>
            <h2>add new user</h2>
            <form action="/new-user" method="POST">
                <label for="name">
                    add new user 
                    <input type="text" name="username" id="name123123" />
                </label>
                <input type="submit" value="submit"/>
            </form>
        </body>
    </html>
`;

const usersSite = `
    <html>
        <head>
            <title>USERS page</title>
        </head>
        <body>
            <ul>
                <li>USER 1</li>
                <li>USER 2</li>
                <li>USER 3</li>
                <li>USER 4</li>
            </ul>
        </body>
    </html>
`;

const routesHandler = (req, res) => {
  const { url, method } = req;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    res.write(welcomeHtml);
    return res.end();
  }

  if (url === "/users") {
    res.write(usersSite);
    return res.end();
  }
  console.log(method);
  if (url === "/new-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const name = parsedBody.split("=")[1];
      console.log(name);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
};

module.exports = routesHandler;
