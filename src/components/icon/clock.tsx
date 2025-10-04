import React from "react";

interface ClockProps {
    size?: number;
    stroke?: string;
    className?: string;
}

const Clock: React.FC<ClockProps> = ({
    size = 64,
    stroke = "#000000",
    className = "",
}) => {
    return (
        <svg
            width={`${size}px`}
            height={`${size}px`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle
                cx="12"
                cy="12"
                r="10"
                stroke={stroke}
                strokeWidth="2.4"
            />
            <path
                d="M12 8V12L14.5 14.5"
                stroke={stroke}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Clock;