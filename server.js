// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

const cors = require('cors');
app.use(cors());


app.use(express.json());

const saveCredentialsToFile = (credentials) => {
  const filePath = path.join(__dirname, 'credentials.json');
  fs.writeFileSync(filePath, JSON.stringify(credentials, null, 2), 'utf-8');
  console.log('Credentials saved successfully');
};

app.post('/save-credentials', (req, res) => {
  const credentials = req.body;
  saveCredentialsToFile(credentials);
  res.send('Credentials saved successfully');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
