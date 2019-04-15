const express = require('express');//initialize the server
const path = require('path');//helps with the directories
const app = express();

//getting our post routes

const routes = require('./server/routes/routes');

//using middleware
app.use(express.static(path.join(__dirname, 'dist/demoProject')));
app.use('/routes', routes);

//catch all other routes abd return it to the index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/demoProject/index.html'))
})

const port = process.env.PORT || 4600

app.listen(port, (req, res) => {
  console.log(`Running on port  ${port}`);
})
