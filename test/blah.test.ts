import { randomCode } from '../src/index';

describe('The function return a code ', () => {
  it('works', () => {
    let code = randomCode(10);
    expect(code.length).toBe(10);
  });
});
