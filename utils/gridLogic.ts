/**
 * Grid Logic Utilities for Recursive Grid
 * Handles all game logic separated from UI components
 */

export type Grid = number[][];

/**
 * Initialize a 3x3 grid filled with zeros
 */
export function initializeGrid(): Grid {
  return Array(3).fill(null).map(() => Array(3).fill(0));
}

/**
 * Check if a box is locked (value >= 15)
 */
export function checkIfLocked(value: number): boolean {
  return value >= 15;
}

/**
 * Handle click on a grid box
 * @param row - Row index (0-2)
 * @param col - Column index (0-2)
 * @param grid - Current grid state
 * @returns New grid state after applying click and ripple rules
 */
export function handleClick(row: number, col: number, grid: Grid): Grid {
  // Create a deep copy of the grid for immutable update
  const newGrid: Grid = grid.map(row => [...row]);

  // Check if the clicked box is locked
  if (checkIfLocked(newGrid[row][col])) {
    return grid; // Return unchanged grid if locked
  }

  // Increment the clicked box
  newGrid[row][col] += 1;

  // Apply ripple rules
  applyRippleRules(row, col, newGrid);

  return newGrid;
}

/**
 * Apply ripple rules after a box value changes
 * Rule A: If value % 3 === 0, decrement right neighbor
 * Rule B: If value % 5 === 0, increment below neighbor by 2
 * 
 * @param row - Row index of the changed box
 * @param col - Column index of the changed box
 * @param grid - Grid to modify (mutated in place)
 */
export function applyRippleRules(row: number, col: number, grid: Grid): void {
  const value = grid[row][col];

  // Rule A: Divisible by 3 → decrement right neighbor
  // IMPORTANT: Only apply if value > 0 (0 is technically divisible by 3 but shouldn't trigger)
  if (value > 0 && value % 3 === 0) {
    const rightCol = col + 1;

    // Check if right neighbor exists (not last column)
    if (rightCol < 3) {
      const rightValue = grid[row][rightCol];

      // Only modify if right neighbor is not locked
      if (!checkIfLocked(rightValue)) {
        grid[row][rightCol] -= 1;
      }
    }
  }

  // Rule B: Divisible by 5 → increment below neighbor by 2
  // IMPORTANT: Only apply if value > 0 (0 is technically divisible by 5 but shouldn't trigger)
  if (value > 0 && value % 5 === 0) {
    const belowRow = row + 1;

    // Check if below neighbor exists (not bottom row)
    if (belowRow < 3) {
      const belowValue = grid[belowRow][col];

      // Only modify if below neighbor is not locked
      if (!checkIfLocked(belowValue)) {
        grid[belowRow][col] += 2;
      }
    }
  }
}
