import React from "react";

type IconProps = {
    fill?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
};

const StarEmptyIcon: React.FC<IconProps> = ({
    fill = "#ffc107",
    width = 16,
    height = 16,
    className = "",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fill}
            width={width}
            height={height}
            viewBox="0 0 24 24"
            className={className}
        >
            <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 
               12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 
               1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 
               4.38.38-3.32 2.88 1 4.28L12 15.4z" />
            <path d="M0 0h24v24H0z" fill="none" />
        </svg>
    );
};

export default StarEmptyIcon;