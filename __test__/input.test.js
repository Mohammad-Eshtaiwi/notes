'use strict';
const mockProcess = require('jest-mock-process');
const minimist = require('minimist');
jest.mock('minimist');
const mockExit = mockProcess.mockProcessExit();
const { Input } = require('../lib/input.js');

jest.mock('minimist');
minimist.mockImplementation(() => {
  return { _: [], add: 'test my app' };
});

jest.spyOn(process, 'exit');

const input = new Input();
describe('validateAction', () => {
  it('it shoud accept a valid actions', () => {
    const actions = ['add', 'a', 'delete', 'd', 'l', 'list'];
    const validActions = ['add', 'delete', 'list'];

    actions.forEach(a => {
      expect(validActions).toContain(input.validateAction({ _: [], [a]: 'test my app' }));
    });
  });
  it('it shoud not accept empty payload', () => {
    input.validateAction({ _: [], add: '' });
    expect(mockExit).toHaveBeenCalled();
  });
});
