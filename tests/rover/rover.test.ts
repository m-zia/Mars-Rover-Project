//test file for index.ts rover.ts

import {rotateLeft, rotateRight} from "../../src/rover/index"


describe('Rover Movement', () => {
  describe('rotateLeft', () => {
    it('should rotate the direction of the rover to the left', () => {
      expect(rotateLeft('N')).toBe('W');
      expect(rotateLeft('W')).toBe('S');
      expect(rotateLeft('S')).toBe('E');
      expect(rotateLeft('E')).toBe('N');
    });
  });

  describe('rotateRight', () => {
    it('should rotate the direction of the rover to the right', () => {
      expect(rotateRight('N')).toBe('E');
      expect(rotateRight('E')).toBe('S');
      expect(rotateRight('S')).toBe('W');
      expect(rotateRight('W')).toBe('N');
    });
  });


})