import { HumanReadableDurationTimeFormatPipe } from './human-readable-duration-time-format.pipe';

describe('HumanReadableDurationTimeFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new HumanReadableDurationTimeFormatPipe();

    expect(pipe).toBeTruthy();
  });
});
