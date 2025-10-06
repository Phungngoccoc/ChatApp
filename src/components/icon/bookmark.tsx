import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    fill?: string;
    width?: number | string;
    height?: number | string;
}

export const BookmarkIcon: React.FC<IconProps> = ({
    fill = '#000000',
    width = 64,
    height = 64,
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="-4 0 30 30"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="none"
            {...props}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
                <title>bookmark</title>
                <desc>Created with Sketch Beta.</desc>
                <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                >
                    <g
                        id="Icon-Set-Filled"
                        transform="translate(-419.000000, -153.000000)"
                        fill={fill}
                    >
                        <path
                            d="M437,153 L423,153 C420.791,153 419,154.791 419,157 L419,179 C419,181.209 420.791,183 423,183 L430,176 L437,183 C439.209,183 441,181.209 441,179 L441,157 C441,154.791 439.209,153 437,153"
                            id="bookmark"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};