const express = require("express");
const { resolve } = require("path");
const server = express();

server.use(express.static(resolve(__dirname, "public")));

server.use(express.urlencoded({ extended: true }));

const donors = [
  { name: "Herta França", email: "hertafranca.tech@gmail.com", blood: "O+" },
];

const nunjucks = require("nunjucks");
nunjucks.configure(__dirname, {
  express: server,
});

server.get("/", function (req, res) {
  // db.query("SELECT * FROM donors", function (err, result) {
  //   if (err) {
  //     res.send("database error.");
  //   }

  //   const donors = result.rows;
  //   return res.render("index.html", { donors });
  // });

  return res.render("index.html", { donors });
});

server.post("/", function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const blood = req.body.blood;

  console.log(name, email, blood);

  if (name == "" || email == "" || blood == "") {
    return res.send("All fields must be filled out.");
  }

  // const query = `
  //   INSERT INTO donors ("name", "email", "blood")
  //   VALUES ($1, $2, $3)`;

  // const values = [name, email, blood];

  // db.query(query, values, function (err) {
  //   if (err) {
  //     console.log(err);
  //     return res.send("database error");
  //   }
  //   return res.redirect("/");
  // });
  donors.push({ name, email, blood });
  return res.redirect("/");
});

server.listen(4444);
