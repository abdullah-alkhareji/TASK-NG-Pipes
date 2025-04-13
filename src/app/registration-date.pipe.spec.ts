import { RegistrationDatePipe } from './registration-date.pipe';

describe('RegistrationDatePipe', () => {
  it('create an instance', () => {
    const pipe = new RegistrationDatePipe();
    expect(pipe).toBeTruthy();
  });
});
