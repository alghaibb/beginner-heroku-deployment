const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', (req, res) => {
  res.send("Hello Heroku!")
})

app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting the server:', err);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});