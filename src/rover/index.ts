//export the rover functions here
//will contain rover related functions (moving, rotating etc)

type Direction = 'N' | 'S' | 'W' | 'E';

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
        throw new Error(`Invalid direction: ${direction}`);
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
        throw new Error(`Invalid direction: ${direction}`);
    }
  }
  