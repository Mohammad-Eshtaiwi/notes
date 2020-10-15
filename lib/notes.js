// var uniqid = require('uniqid');

const INote = require('./notes-interface');
class Notes {
  constructor(input) {}
  execute({ action, payload, category, id }) {
    // console.log(action);
    this[action](payload, category, id);
    // console.log(`Adding Note: ${payload}`);
    // console.log(`category: ${category}`);
  }

  async add(text, category) {
    // console.log('paaassssssssssssssses', text, category);
    const result = await INote.create(text, category);
    // console.log(result);
    return result;
  }
  async delete(id) {
    INote.delete(id);
  }
  async list(payload) {
    const result = await INote.get(payload);
    console.log('const result =const result =const result =', result);
  }
}

module.exports.Notes = Notes;
