//testing the moveRover() function

import { moveRover } from "../../src/rover/moveRover"
import { Plateau, Rover } from "../../src/types/rover";



//need MORE multiple step tests!!!!


describe('Move Rover based on given position and instructions', () => {
  const plateau: Plateau = { maxX: 5, maxY: 5 };

 
  it('Move the rover multiple steps', () => {
    const rover: Rover = { x: 1, y: 2, direction: 'N' };
    const instructions = 'LMLMLMLMM';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 3, direction: 'N' });
  });


});


describe('Rotate the rover to the left based on given position and instructions', () => {
  const plateau: Plateau = { maxX: 5, maxY: 5 };

  it('Rotate the rover to the left', () => {
    const rover: Rover = { x: 1, y: 2, direction: 'N' };
    const instructions = 'L';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 2, direction: 'W' });
  });

  it('Rotate the rover to the left', () => {
    const rover: Rover = { x: 3, y: 2, direction: 'E' };
    const instructions = 'L';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 2, direction: 'N' });
  });

  it('Rotate the rover to the left', () => {
    const rover: Rover = { x: 5, y: 5, direction: 'W' };
    const instructions = 'L';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 5, direction: 'S' });
  });

  it('Rotate the rover to the left', () => {
    const rover: Rover = { x: 0, y: 1, direction: 'S' };
    const instructions = 'L';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 1, direction: 'E' });
  });

});


describe('Rotate the rover to the right based on given position and instructions', () => {
  const plateau: Plateau = { maxX: 5, maxY: 5 };

  it('Rotate the rover to the left', () => {
    const rover: Rover = { x: 1, y: 2, direction: 'N' };
    const instructions = 'R';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 2, direction: 'E' });
  });

  it('Rotate the rover to the left', () => {
    const rover: Rover = { x: 3, y: 2, direction: 'E' };
    const instructions = 'R';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 2, direction: 'S' });
  });

  it('Rotate the rover to the left', () => {
    const rover: Rover = { x: 5, y: 5, direction: 'W' };
    const instructions = 'R';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 5, direction: 'N' });
  });

  it('Rotate the rover to the left', () => {
    const rover: Rover = { x: 0, y: 1, direction: 'S' };
    const instructions = 'R';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 1, direction: 'W' });
  });

});


describe('Moving the rover when the plateau is 5 ', () => {
  const plateau: Plateau = { maxX: 5, maxY: 5 };

  //x=0
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 0, y: 0, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 1, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 0, y: 0, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 0, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 0, y: 1, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 2, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 0, y: 1, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 1, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 0, y: 1, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 0, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 0, y: 2, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 3, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 0, y: 2, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 2, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 0, y: 2, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 1, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 0, y: 3, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 4, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 0, y: 3, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 3, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 0, y: 3, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 2, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 0, y: 4, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 5, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 0, y: 4, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 4, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 0, y: 4, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 3, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 0, y: 5, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 5, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 0, y: 5, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 4, direction: 'S' });
  });

  //x=1
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 0, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 1, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 0, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 0, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 0, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 0, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 1, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 2, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 1, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 1, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 1, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 0, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 1, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 1, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 2, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 3, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 2, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 2, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 2, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 1, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 2, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 2, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 3, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 4, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 3, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 3, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 3, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 2, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 3, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 3, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 4, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 5, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 4, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 4, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 4, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 3, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 4, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 4, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 5, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 5, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 5, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 4, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 1, y: 5, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 5, direction: 'W' });
  });

  //x=2
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 0, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 1, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 0, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 0, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 0, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 0, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 1, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 2, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 1, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 1, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 1, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 0, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 1, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 1, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 2, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 3, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 2, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 2, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 2, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 1, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 2, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 2, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 3, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 4, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 3, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 3, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 3, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 2, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 3, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 3, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 4, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 5, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 4, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 4, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 4, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 3, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 4, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 4, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 5, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 5, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 5, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 4, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 2, y: 5, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 5, direction: 'W' });
  });

  //x=3
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 0, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 1, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 0, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 0, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 0, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 0, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 1, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 2, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 1, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 1, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 1, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 0, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 1, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 1, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 2, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 3, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 2, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 2, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 2, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 1, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 2, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 2, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 3, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 4, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 3, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 3, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 3, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 2, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 3, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 3, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 4, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 5, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 4, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 4, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 4, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 3, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 4, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 4, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 5, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 5, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 5, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 4, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 3, y: 5, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 5, direction: 'W' });
  });


  //x=4
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 0, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 1, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 0, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 0, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 0, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 0, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 1, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 2, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 1, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 1, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 1, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 0, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 1, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 1, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 2, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 3, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 2, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 2, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 2, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 1, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 2, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 2, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 3, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 4, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 3, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 3, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 3, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 2, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 3, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 3, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 4, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 5, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 4, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 4, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 4, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 3, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 4, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 4, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 5, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 5, direction: 'E' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 5, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 4, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 4, y: 5, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 5, direction: 'W' });
  });


  //x=5
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 5, y: 0, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 1, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 5, y: 0, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 0, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 5, y: 1, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 2, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 5, y: 1, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 0, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 5, y: 1, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 1, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 5, y: 2, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 3, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 5, y: 2, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 1, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 5, y: 2, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 2, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 5, y: 3, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 4, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 5, y: 3, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 2, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 5, y: 3, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 3, direction: 'W' });
  });

  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 5, y: 4, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 5, direction: 'N' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 5, y: 4, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 3, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 5, y: 4, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 4, direction: 'W' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 5, y: 5, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 4, direction: 'S' });
  });
  it('Rover should move one grid point in the current direction', () => {
    const rover: Rover = { x: 5, y: 5, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 5, direction: 'W' });
  });

});



describe('Stopping the rover at the boundary when the plateau is 5 ', () => {
  const plateau: Plateau = { maxX: 5, maxY: 5 };

  //y=5
  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 5, y: 5, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 5, direction: 'E' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 5, y: 5, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 5, direction: 'N' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 4, y: 5, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 5, direction: 'N' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 3, y: 5, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 5, direction: 'N' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 2, y: 5, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 5, direction: 'N' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 1, y: 5, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 5, direction: 'N' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 0, y: 5, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 5, direction: 'N' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 0, y: 5, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 5, direction: 'W' });
  });

  //y=0
  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 5, y: 0, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 0, direction: 'E' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 5, y: 0, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 0, direction: 'S' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 4, y: 0, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 4, y: 0, direction: 'S' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 3, y: 0, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 3, y: 0, direction: 'S' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 2, y: 0, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 2, y: 0, direction: 'S' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 1, y: 0, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 1, y: 0, direction: 'S' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 0, y: 0, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 0, direction: 'S' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 0, y: 0, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 0, direction: 'W' });
  });


  //x=0
  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 0, y: 0, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 0, direction: 'S' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 0, y: 0, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 0, direction: 'W' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 0, y: 1, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 1, direction: 'W' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 0, y: 2, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 2, direction: 'W' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 0, y: 3, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 3, direction: 'W' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 0, y: 4, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 4, direction: 'W' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 0, y: 5, direction: 'W' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 5, direction: 'W' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 0, y: 5, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 0, y: 5, direction: 'N' });
  });


  //x=5
  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 5, y: 0, direction: 'S' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 0, direction: 'S' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 5, y: 0, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 0, direction: 'E' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 5, y: 1, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 1, direction: 'E' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 5, y: 2, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 2, direction: 'E' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 5, y: 3, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 3, direction: 'E' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 5, y: 4, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 4, direction: 'E' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 5, y: 5, direction: 'E' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 5, direction: 'E' });
  });

  it('Rover should stop at the the plateau boundary', () => {
    const rover: Rover = { x: 5, y: 5, direction: 'N' };
    const instructions = 'M';
    const finalRover = moveRover(plateau, rover, instructions);
    expect(finalRover).toEqual({ x: 5, y: 5, direction: 'N' });
  });

})




