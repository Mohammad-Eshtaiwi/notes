const { Input } = require('./lib/input');
const { Notes } = require('./lib/notes');

// call execute and pass an input declaration into it
// console.log(new Input());
new Notes().execute(new Input());
