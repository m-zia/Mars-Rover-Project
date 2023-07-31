import {processRoverInput} from "../src/main"


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

});