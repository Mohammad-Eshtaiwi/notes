('use strict');
require('@code-fellows/supergoose');
const INote = require('../lib/notes-interface');

describe('CURD', () => {
  //   it('should create new record', async () => {
  //     const obj = { text: 'text to add', category: 'cat to add' };
  //     const record = await INote.create(obj.text, obj.category);
  //     Object.keys(obj).forEach(key => {
  //       expect(record[key]).toEqual(obj[key]);
  //     });
  //   });
  it('should return records based on what vategory passed', async () => {
    const obj = { text: 'text to get', category: 'cat to get' };
    // console.log(obj);
    const createRecord = await INote.create(obj.text, obj.category);
    console.log('created record', createRecord);

    // jest.setTimeout(5000);
    const get = await INote.get(createRecord.text, createRecord.category);
    console.log('get', get);
    Object.keys(obj).forEach(key => {
      console.log('keeeeeeeeeeeeeeeeeey', key);
      expect(get).toEqual(obj);
    });
  });
});
