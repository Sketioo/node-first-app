const path = require('path');

const express = require("express");
const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'))
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
