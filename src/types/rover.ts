//types for rover/rover.ts

export type Direction = 'N' | 'E' | 'S' | 'W';

export interface Rover {
  x: number;
  y: number;
  direction: Direction;
}

export interface Plateau {
  maxX: number;
  maxY: number;
}