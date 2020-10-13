// var uniqid = require('uniqid');
const Note = require('../models/noteModel');
const mongoose = require(`mongoose`);
class Notes {
  constructor(input) {}
  execute({ action, payload, category, id }) {
    // console.log(action);
    this[action](payload, category, id);
    // console.log(`Adding Note: ${payload}`);
    // console.log(`category: ${category}`);
  }

  async add(text, category) {
    // console.log({
    //   note: text,
    //   category: category,
    // });
    try {
      const note = Note({
        text,
        category,
      });
      await note.save();
      console.log('saved node:', text);
      mongoose.disconnect();
    } catch (error) {
      console.log('please provide a category');
      mongoose.disconnect();
    }
  }
  async delete(id) {
    try {
      const note = await Note.findByIdAndRemove(id);
      console.log(`Deleted Note ${id}`);
      mongoose.disconnect();
    } catch (error) {
      console.log('please add valid id');
      mongoose.disconnect();
    }
  }
  async list(payload) {
    let notes = [];
    if (payload === true || payload === '') {
      notes = await Note.find({});
    } else {
      notes = await Note.find({ category: payload });
    }
    // console.log(notes);
    if (notes.length === 0) {
      console.log('no notes to show');
    }
    notes.forEach(note => {
      console.log(`category:${note.category}`);
      console.log(`-------------------`);
      console.log(`your note is: ${note.text}`);
    });
    mongoose.disconnect();
  }
}

module.exports.Notes = Notes;
