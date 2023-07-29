//test file for index.ts rover.ts

import {rotateLeft, rotateRight, move} from "../../src/rover/index"
import { Plateau, Rover } from "../../src/types/rover";

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



describe('moving the rover when the plateau is 5 ', () => {
  const plateau: Plateau = { maxX: 5, maxY: 5 };

  //x=0
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 0, y: 0, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 0, y: 1, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 0, y: 1, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 0, y: 2, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 0, y: 2, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 0, y: 3, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 0, y: 3, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 0, y: 4, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 0, y: 4, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 0, y: 5, direction: 'N' });
  });

  //x=1
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 0, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 1, y: 1, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 1, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 1, y: 2, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 2, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 1, y: 3, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 3, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 1, y: 4, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 4, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 1, y: 5, direction: 'N' });
  });

  //x=2
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 0, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 2, y: 1, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 1, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 2, y: 2, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 2, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 2, y: 3, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 3, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 2, y: 4, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 4, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 2, y: 5, direction: 'N' });
  });

  //x=3
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 0, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 3, y: 1, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 1, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 3, y: 2, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 2, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 3, y: 3, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 3, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 3, y: 4, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 4, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 3, y: 5, direction: 'N' });
  });

  //x=4
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 0, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 4, y: 1, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 1, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 4, y: 2, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 2, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 4, y: 3, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 3, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 4, y: 4, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 4, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 4, y: 5, direction: 'N' });
  });

  //x=5
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 5, y: 0, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 5, y: 1, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 5, y: 1, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 5, y: 2, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 5, y: 2, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 5, y: 3, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 5, y: 3, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 5, y: 4, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 5, y: 4, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 5, y: 5, direction: 'N' });
  });

});



describe('Stopping the rover at the boundary when the plateau is 5 ', () => {
  const plateau: Plateau = { maxX: 5, maxY: 5 };

  //y=5
  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 5, y: 5, direction: 'E' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 5, y: 5, direction: 'E' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 5, y: 5, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 5, y: 5, direction: 'N' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 4, y: 5, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 4, y: 5, direction: 'N' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 3, y: 5, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 3, y: 5, direction: 'N' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 2, y: 5, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 2, y: 5, direction: 'N' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 1, y: 5, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 1, y: 5, direction: 'N' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 0, y: 5, direction: 'N' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 0, y: 5, direction: 'N' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 0, y: 5, direction: 'W' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 0, y: 5, direction: 'W' });
  });

  //y=0
  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 5, y: 0, direction: 'E' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 5, y: 0, direction: 'E' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 5, y: 0, direction: 'S' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 5, y: 0, direction: 'S' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 4, y: 0, direction: 'S' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 4, y: 0, direction: 'S' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 3, y: 0, direction: 'S' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 3, y: 0, direction: 'S' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 2, y: 0, direction: 'S' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 2, y: 0, direction: 'S' });
  });
  
  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 1, y: 0, direction: 'S' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 1, y: 0, direction: 'S' });
  });
  
  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 0, y: 0, direction: 'S' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 0, y: 0, direction: 'S' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 0, y: 0, direction: 'W' };
    move(rover, plateau);
    expect(rover).toEqual({ x: 0, y: 0, direction: 'W' });
  });

})



