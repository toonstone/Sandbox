import { ConvertToSpacePipe } from './convert-to-space.pipe';

describe('ConvertToSpacePipe', () => {
  
  let pipe: ConvertToSpacePipe;
    
  let inputValue = 'one-two';
  let character = '-';  

  beforeEach(() => {
    pipe = new ConvertToSpacePipe();
  });

  // single test
  it('create an instance', () => {    
    expect(pipe).toBeTruthy();
  });

  it('should expect null when input value is null', () => {

    // arrange
    inputValue = null;  
    
    // act
    const returnValue = pipe.transform(inputValue, character);

    // assert
    expect(returnValue).toBeNull();
  });

  it('should expect undefined when input value is undefined', () => {

    // arrange
    inputValue = undefined;  

    // act & assert
    expect(pipe.transform(inputValue, character)).toBeUndefined();
  });

  it('should expect empty when input value is empty', () => {

    // arrange
    inputValue = '';  

    expect(pipe.transform(inputValue, character)).toBe('');
  });

  it('should expect input value when character input is null', () => {
    
    // arrange
    character = null;

    expect(pipe.transform(inputValue, character)).toEqual(inputValue);
  });

  it('should expect input value when character input is undefined', () => {
    
    // arrange
    character = undefined;

    expect(pipe.transform(inputValue, character)).toEqual(inputValue);
  });

  it('should expect input value when character input is empty', () => {
    
    // arrange
    character = '';

    expect(pipe.transform(inputValue, character)).toEqual(inputValue);
  });

  it('should expect input value replaced with space when valid character', () => {
    
    // arrange
    character = '-';
    inputValue = 'one-two';
    
    // act
    const returnValue = pipe.transform(inputValue, character);

    // assert
    expect(returnValue).toEqual('one two');
  });
  
  afterEach(() => {
    pipe = null;
  });
  
});
