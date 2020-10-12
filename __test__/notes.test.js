'use strict';
const { Input } = require('../lib/input');
const { Notes } = require('../lib/notes');
const mockProcess = require('jest-mock-process');
const minimist = require('minimist');
mockProcess.mockProcessExit();
jest.spyOn(global.console, 'log');

jest.mock('minimist');
minimist.mockImplementation(() => {
  return { _: [], add: 'test my app' };
});

describe('Execute', () => {
  it('it shoud call console.log', () => {
    new Notes().execute(new Input());
    expect(console.log).toHaveBeenCalled();
  });
});
