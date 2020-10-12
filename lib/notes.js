// var uniqid = require('uniqid');
class Notes {
  constructor(input) {}
  execute({ action, payload }) {
    this[action](payload);
    console.log(`Adding Note: ${payload}`);
  }

  add(payload) {
    // console.log({
    //   id: uniqid(),
    //   note: payload,
    // });
  }
}

module.exports.Notes = Notes;
