// components/ArrowIcon.tsx
import React from "react";

interface ArrowIconProps extends React.SVGProps<SVGSVGElement> {
    fill?: string;
    width?: string;
    height?: string;
}

export const SortIcon: React.FC<ArrowIconProps> = ({
    fill = "#000000",
    width = "64px",
    height = "64px",
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M8 0L2 6V7H14V6L8 0Z" fill={fill}></path>
                <path d="M8 16L2 10V9H14V10L8 16Z" fill={fill}></path>
            </g>
        </svg>
    );
};