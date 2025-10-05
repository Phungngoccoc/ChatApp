import React from 'react';

interface CameraVideoFillProps {
    width?: number | string;
    height?: number | string;
    fill?: string;
    className?: string;
}

const CameraVideoFill: React.FC<CameraVideoFillProps> = ({
    width = 64,
    height = 64,
    fill = '#000000',
    className = '',
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill={fill}
            className={className}
        >
            <path
                fillRule="evenodd"
                d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"
            />
        </svg>
    );
};

export default CameraVideoFill;