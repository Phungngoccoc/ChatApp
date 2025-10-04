import React from "react";

type IconProps = {
    width?: number | string;
    height?: number | string;
    color?: string;
    className?: string;
};

const ArrowUpIcon: React.FC<IconProps> = ({
    width = 24,
    height = 24,
    color = "#000000",
    className = "",
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M12 6V18M12 6L7 11M12 6L17 11"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowUpIcon;