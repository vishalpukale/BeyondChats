
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/beyondchats', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  verified: Boolean,
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password, verified: false });
  await user.save();
  res.send('User registered');
  console.log(user)
});




const axios = require('axios');
const cheerio = require('cheerio');

app.get('/fetch-meta', async (req, res) => {
  const { url } = req.query;
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const description = $('meta[name="description"]').attr('content');
    res.json({ description });
  } catch (error) {
    res.status(500).send('Error fetching meta description');
  }
});






app.listen(50000, () => {
  console.log('Server running on port 50000');
});
