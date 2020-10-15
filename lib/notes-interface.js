`use strict`;
const Note = require('../models/noteModel');
const mongoose = require(`mongoose`);
class INote {
  async create(text, category) {
    // console.log('interfaaaaaace', text, category);
    try {
      const note = new Note({
        text,
        category,
      });
      //   console.log('noooooooooooooootre', note);
      await note.save();
      console.log('saved node:', text);
      mongoose.disconnect();
      console.log('noooooooooooooootre', note);
      return { text: note.text, category: note.category };
    } catch (error) {
      //   console.log(error.message);
      console.log('please provide a category');
      mongoose.disconnect();
    }
  }
  async get(category) {
    let notes = [];
    console.log('categorycategorycategory', category);
    if (category === true || category === '') {
      notes = await Note.find({});
    } else {
      console.log('notesnotesnotesnotes', notes);
      notes = await Note.find({ category }).select({ text: 1, category: 1, _id: 0 });
      console.log('notesnotesnotesnotes', notes);
    }
    console.log('notesnotesnotesnotes', notes);
    if (notes.length === 0) {
      console.log('no notes to show');
    }
    notes.forEach(note => {
      console.log(`category:${note.category}`);
      console.log(`-------------------`);
      console.log(`your note is: ${note.text}`);
    });
    // console.log(notes);
    mongoose.disconnect();
    return notes;
  }
  async delete(id) {
    try {
      await Note.findByIdAndDelete(id);
      console.log(`Deleted Note ${id}`);
      mongoose.disconnect();
    } catch (error) {
      console.log('please pass valid id');
      mongoose.disconnect();
    }
  }
}

module.exports = new INote();
