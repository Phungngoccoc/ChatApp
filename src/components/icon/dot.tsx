import React from "react";

interface DotsProps {
    size?: number;
    color?: string;
    className?: string;
}

const Dots: React.FC<DotsProps> = ({ size = 24, color = "#000000", className = "" }) => {
    return (
        <svg
            fill={color}
            viewBox="0 0 32 32"
            width={size}
            height={size}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M16,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S17.654,13,16,13z" />
            <path d="M6,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S7.654,13,6,13z" />
            <path d="M26,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S27.654,13,26,13z" />
        </svg>
    );
};

export default Dots;