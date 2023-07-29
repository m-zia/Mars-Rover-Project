//implementing the rover functions


import { Direction, Rover, Plateau } from "../types/rover";
import { rotateLeft, rotateRight, move } from "./roverFunctions";

function moveRover(plateau: Plateau, rover: Rover, instructions: string): Rover {
  for (let instr of instructions) {
    if (instr === 'L') {
      // Rotate rover 90 degrees to the left
      rover.direction = rotateLeft(rover.direction);
    } else if (instr === 'R') {
      // Rotate rover 90 degrees to the right
      rover.direction = rotateRight(rover.direction);
    } else if (instr === 'M') {
      // Move rover one grid point in it's current direction
      move(rover, plateau);
    }
  }
  return rover;
}