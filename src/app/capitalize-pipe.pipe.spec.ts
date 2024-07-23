import { CapitalizePipePipe } from './capitalize-pipe.pipe';

describe('CapitalizePipePipe', () => {
  let pipe : CapitalizePipePipe;

  beforeEach(() =>{
    pipe = new CapitalizePipePipe()
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });


  it('should capitalize the first letter of a string', () => {
    expect(pipe.transform('hello')).toBe('Hello');
    expect(pipe.transform('world')).toBe('World');
    expect(pipe.transform('CIC')).toBe('CIC');
  });

  it('should return an empty string if the input is empty', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should return an empty string if the input is null', () => {
    expect(pipe.transform(null)).toBe('');
  });

});
