//export the rover functions here
//will contain rover related functions (moving, rotating etc)

//type Direction = 'N' | 'E' | 'S' | 'W';

import { Direction, Rover, Plateau } from "../types/index";

export function rotateLeft(direction: Direction): Direction {
    switch (direction) {
      case 'N':
        return 'W';
      case 'W':
        return 'S';
      case 'S':
        return 'E';
      case 'E':
        return 'N';
      default:
        throw new Error(`Invalid direction for rotateLeft function: ${direction}`);
    }
  }
  
  export function rotateRight(direction: Direction): Direction {
    switch (direction) {
      case 'N':
        return 'E';
      case 'E':
        return 'S';
      case 'S':
        return 'W';
      case 'W':
        return 'N';
      default:
        throw new Error(`Invalid direction for rotateRight function: ${direction}`);
    }
  }



  export function move(rover: Rover, plateau: Plateau): void {
    switch (rover.direction) {
      case 'N':
        if (rover.y < plateau.maxY) {
          rover.y++;
        }
        break;
      case 'S':
        if (rover.y > 0) {
          rover.y--;
        }
        break;
      case 'E':
        if (rover.x < plateau.maxX) {
          rover.x++;
        }
        break;
      case 'W':
        if (rover.x > 0) {
          rover.x--;
        }
        break;
      default:
        throw new Error(`Invalid direction for move function: ${rover.direction}`);
    }
  }
  