import React from 'react';

interface BoxProps {
    value: number;
    onClick: () => void;
    isLocked: boolean;
}

export default function Box({ value, onClick, isLocked }: BoxProps) {
    // Determine background and text colors based on value
    const getBoxStyles = () => {
        if (isLocked) {
            // Locked boxes (>= 15): red background, white text
            return {
                backgroundColor: '#ef4444', // red-500
                color: 'white',
                cursor: 'not-allowed',
            };
        } else if (value % 2 === 0) {
            // Even numbers: gray background, default text
            return {
                backgroundColor: '#e0e0e0',
                color: '#000000',
                cursor: 'pointer',
            };
        } else {
            // Odd numbers: dark blue background, white text
            return {
                backgroundColor: '#1a237e',
                color: 'white',
                cursor: 'pointer',
            };
        }
    };

    const styles = getBoxStyles();

    return (
        <button
            onClick={isLocked ? undefined : onClick}
            disabled={isLocked}
            className="
        w-[100px] h-[100px]
        rounded
        flex items-center justify-center
        text-3xl font-bold
        transition-all duration-200
        hover:scale-105 active:scale-95
      "
            style={{
                backgroundColor: styles.backgroundColor,
                color: styles.color,
                cursor: styles.cursor,
                boxShadow: '2px 2px 0px black',
            }}
        >
            {value}
        </button>
    );
}
