const { Input } = require('./lib/input');
const { Notes } = require('./lib/notes');
require('dotenv').config();
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/note';

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(err => {});
// call execute and pass an input declaration into it
// console.log(new Input());
new Notes().execute(new Input());
