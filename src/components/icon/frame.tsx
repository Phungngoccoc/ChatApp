import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    fill?: string;
    width?: number | string;
    height?: number | string;
    rotate?: number;
}

export const FrameIcon: React.FC<IconProps> = ({
    fill = '#000000',
    width = 64,
    height = 64,
    rotate = 0,
    style,
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(${rotate}deg)`, ...style }}
            {...props}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
                <path d="M12 8V6H8V10H10V8H12Z" fill={fill} />
                <path d="M14 14H16V18H12V16H14V14Z" fill={fill} />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3ZM6 20V4H18V20H6Z"
                    fill={fill}
                />
            </g>
        </svg>
    );
};

