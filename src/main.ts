
import { Rover, Plateau, Direction } from "./types/index";
import { moveRover } from "./rover/moveRover";


export function processRoverInput(input: string[]): void {
  const plateauSize: string[] = input[0].split(' ');
  const plateau: Plateau = {
    maxX: parseInt(plateauSize[0]),
    maxY: parseInt(plateauSize[1]),
  };

  const rovers: Rover[] = [];

  for (let i = 1; i < input.length; i += 2) {
    const startPos: string[] = input[i].split(' ');
    const rover: Rover = {
      x: parseInt(startPos[0]),
      y: parseInt(startPos[1]),
      direction: startPos[2] as Direction,
    };
    const instructions: string = input[i + 1];
    rovers.push(moveRover(plateau, rover, instructions));
  }

  // Printing the output
  for (let rover of rovers) {
    console.log(`${rover.x} ${rover.y} ${rover.direction}`);
  }
}

//Example of running this main function with an input

const input: string[] = [
  '5 5',
  '1 2 N',
  'LMLMLMLMM',
  '3 3 E',
  'MMRMMRMRRM',
];

processRoverInput(input);