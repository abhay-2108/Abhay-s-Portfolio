import express from 'express';
const { sendMail } = require('./mailController.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', async (req, res) => {
  await sendMail();
  res.send('Email has been sent successfully!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
