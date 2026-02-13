'use client';

import React, { useState } from 'react';
import Box from './Box';
import { initializeGrid, handleClick, checkIfLocked, Grid } from '@/utils/gridLogic';

export default function GridComponent() {
    const [grid, setGrid] = useState<Grid>(initializeGrid());

    const onBoxClick = (row: number, col: number) => {
        const newGrid = handleClick(row, col, grid);
        setGrid(newGrid);
    };

    const resetGrid = () => {
        setGrid(initializeGrid());
    };

    return (
        <div className="flex flex-col items-center gap-8">
            {/* Grid */}
            <div className="grid grid-cols-3 gap-4">
                {grid.map((row, rowIndex) =>
                    row.map((value, colIndex) => (
                        <Box
                            key={`${rowIndex}-${colIndex}`}
                            value={value}
                            onClick={() => onBoxClick(rowIndex, colIndex)}
                            isLocked={checkIfLocked(value)}
                        />
                    ))
                )}
            </div>

            {/* Reset Button */}
            <button
                onClick={resetGrid}
                className="
          px-6 py-3
          bg-gradient-to-r from-blue-600 to-purple-600
          text-white font-semibold
          rounded-lg
          shadow-lg
          hover:shadow-xl
          hover:scale-105
          active:scale-95
          transition-all duration-200
        "
            >
                Reset Grid
            </button>
        </div>
    );
}
