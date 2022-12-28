import React from 'react'

type HeadingLargeProps = {
    children: React.ReactNode;
}

const HeadingLarge: React.FC<HeadingLargeProps> = ({children}) => {
    return (
        <h1 className="basis-3/5 font-montserrat text-3xl font-bold">
            {children}
        </h1>
    )
}

export default HeadingLarge;
