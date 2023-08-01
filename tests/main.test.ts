//testing the main function that powers the entire project
import { processRoverInput } from "../src/main"

describe('processInput', () => {
  it('should process valid input and print rover positions', () => {
    const input: string[] = [
      '5 5',
      '1 2 N',
      'LMLMLMLMM',
      '3 3 E',
      'MMRMMRMRRM',
    ];

    const consoleSpy = jest.spyOn(console, 'log');
    processRoverInput(input);
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, '1 3 N');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, '5 1 E');
    consoleSpy.mockRestore();
  });

  it('should process valid input with multiple rovers and print rover positions', () => {
    const input: string[] = [
      '10 10',
      '1 2 N',
      'LMLMLMLMM',
      '5 5 E',
      'MMRMMRMRRM',
      '7 8 S',
      'MMRMLMM',
    ];

    const consoleSpy = jest.spyOn(console, 'log');
    processRoverInput(input);
    expect(consoleSpy).toHaveBeenCalledTimes(3);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, '1 3 N');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, '7 3 E');
    expect(consoleSpy).toHaveBeenNthCalledWith(3, '6 4 S');
    consoleSpy.mockRestore();
  });
});