const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const postsRoutes = require('./routes/posts');

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
dotenv.config();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Başladık...');
});

app.use('/posts', postsRoutes);

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server ${PORT} portunda ayağa kalktı...`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
