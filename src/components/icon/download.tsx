// components/DownloadIcon.tsx
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    fill?: string;
    width?: number | string;
    height?: number | string;
}

export const DownloadIcon: React.FC<IconProps> = ({
    fill = '#0F0F0F',
    width = 64,
    height = 64,
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H22C22.5523 21 23 21.4477 23 22Z"
                    fill={fill}
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.3099 18.6881C12.5581 19.3396 11.4419 19.3396 10.6901 18.6881L5.87088 14.5114C4.47179 13.2988 5.32933 11 7.18074 11L9 11V3C9 1.89543 9.89543 1 11 1H13C14.1046 1 15 1.89543 15 3V11H16.8193C18.6707 11 19.5282 13.2988 18.1291 14.5114L13.3099 18.6881ZM11.3451 16.6091C11.7209 16.9348 12.2791 16.9348 12.6549 16.6091L16.8193 13H14.5C13.6716 13 13 12.3284 13 11.5V3H11V11.5C11 12.3284 10.3284 13 9.5 13H7.18074L11.3451 16.6091Z"
                    fill={fill}
                />
            </g>
        </svg>
    );
};
