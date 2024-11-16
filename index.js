const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//API URL
app.get('/', (req, res) => {
  res.send('¡Hello Word José Diego Hidalgo Lucas!');
});

app.listen(PORT, () => {
  console.log(`Function in:  http://localhost:${PORT}`);
});
