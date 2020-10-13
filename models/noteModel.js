`use strict`;

const mongoose = require(`mongoose`);

const { Schema } = mongoose;

const noteSchema = new Schema({
  text: { type: String, required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model('Note', noteSchema);
