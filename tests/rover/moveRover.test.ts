//testing the moveRover() function

import {moveRover} from "../../src/rover/moveRover"
import { Plateau, Rover } from "../../src/types/rover";

describe('Move Rover based on given position and instructions', () => {
    const plateau: Plateau = { maxX: 5, maxY: 5 };
  
    it('Move the rover North', () => {
      const rover: Rover = { x: 1, y: 2, direction: 'N' };
      const instructions = 'M';
      const finalRover = moveRover(plateau, rover, instructions);
      expect(finalRover).toEqual({ x: 1, y: 3, direction: 'N' });
    });
  
    it('Move the rover South', () => {
      const rover: Rover = { x: 1, y: 2, direction: 'S' };
      const instructions = 'M';
      const finalRover = moveRover(plateau, rover, instructions);
      expect(finalRover).toEqual({ x: 1, y: 1, direction: 'S' });
    });
  
    it('Move the rover East', () => {
      const rover: Rover = { x: 1, y: 2, direction: 'E' };
      const instructions = 'M';
      const finalRover = moveRover(plateau, rover, instructions);
      expect(finalRover).toEqual({ x: 2, y: 2, direction: 'E' });
    });
  
    it('Move the rover West', () => {
      const rover: Rover = { x: 1, y: 2, direction: 'W' };
      const instructions = 'M';
      const finalRover = moveRover(plateau, rover, instructions);
      expect(finalRover).toEqual({ x: 0, y: 2, direction: 'W' });
    });
  
    it('Rotate the rover to the left', () => {
      const rover: Rover = { x: 1, y: 2, direction: 'N' };
      const instructions = 'L';
      const finalRover = moveRover(plateau, rover, instructions);
      expect(finalRover).toEqual({ x: 1, y: 2, direction: 'W' });
    });
  
    it('Rotate the rover to the right', () => {
      const rover: Rover = { x: 1, y: 2, direction: 'N' };
      const instructions = 'R';
      const finalRover = moveRover(plateau, rover, instructions);
      expect(finalRover).toEqual({ x: 1, y: 2, direction: 'E' });
    });
  
    it('Move the rover multiple steps', () => {
      const rover: Rover = { x: 1, y: 2, direction: 'N' };
      const instructions = 'LMLMLMLMM';
      const finalRover = moveRover(plateau, rover, instructions);
      expect(finalRover).toEqual({ x: 1, y: 3, direction: 'N' });
    });
  
    it('Should not move the rover beyond the plateau boundaries', () => {
      const rover: Rover = { x: 5, y: 5, direction: 'N' };
      const instructions = 'M';
      const finalRover = moveRover(plateau, rover, instructions);
      expect(finalRover).toEqual({ x: 5, y: 5, direction: 'N' });
    });
  
    
  });


  //need more tests for the above function; essentially need ALL the equivalent movement & border tests that we did in
  // the roverFunctions.test.ts file