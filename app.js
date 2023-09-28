const path = require("path");

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res) => {
  res.status(404).render('404', {pageTitle: '404', path: ''})
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
