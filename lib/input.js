'use strict';
const minimist = require('minimist');
class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    // console.log(args);
    delete args._;

    this.action = this.validateAction(args);
  }
  validateAction(args) {
    try {
      // if user didnt  not passed add or a as argument throw an error
      const actions = ['add', 'a', 'delete', 'd', 'l', 'list'];
      //check if validait action is provided
      let isValidAction = false;

      const keys = Object.keys(args);

      let action = '';
      // if the action is not valid then throw an error to tell user to enter a valid input
      keys.forEach(key => {
        if (actions.includes(key)) {
          action = this.mapKey(key, args);
          isValidAction = true;
        }
      });

      if (!isValidAction) throw new Error(`please use valid action in ${actions}`);
      // if user didnt  pass a or add throw an error
      if (args[action] === true || args[action] === '')
        throw new Error(`please add add value to ${action}`);

      this.payload = args[action];
      return action;
    } catch (error) {
      console.log(error.message);
      process.exit(0);
    }
  }
  /* eslint-disable indent */
  mapKey(key, args) {
    switch (key) {
      case 'a':
        args.add = args['a'];
        delete args['a'];
        return 'add';

      case 'd':
        args.delete = args['d'];
        delete args['d'];
        return 'delete';

      case 'l':
        args.list = args['l'];
        delete args['l'];
        return 'list';
      default:
        return key;
    }
  }
}

module.exports.Input = Input;
