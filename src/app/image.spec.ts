import { CompareImage } from './compareImage';

describe('Image', () => {
  it('should create an instance', () => {
    expect(new CompareImage(10,"test","test")).toBeTruthy();
  });
});
