import React from "react";

interface Camera2Props extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
}

const Movie: React.FC<Camera2Props> = ({
    size = 64,
    color = "#000000",
    className,
    ...props
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
    >
        <path d="M10.054 3 8.387 8h5.892l1.667-5h-5.892Z" fill={color} />
        <path
            d="M7.946 3 6.279 8H2v2h20V8h-5.613l1.667-5H20.6A2.4 2.4 0 0 1 23 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 18.6V5.4A2.4 2.4 0 0 1 3.4 3h4.546Z"
            fill={color}
        />
    </svg>
);

export default Movie;
