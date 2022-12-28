import React from 'react'

type BodyProps = {
    children: React.ReactNode;
    className?: string; 
}

const Body: React.FC<BodyProps> = ({children, className}) => {
    return (
        <p 
            className={className}
        >
            {children}
        </p>
    )
}

export default Body
