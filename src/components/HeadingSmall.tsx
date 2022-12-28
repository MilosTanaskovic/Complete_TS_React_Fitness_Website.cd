import React from 'react'

type HeadingSmallProps = {
    children: React.ReactNode
}

const HeadingSmall: React.FC<HeadingSmallProps> = ({children}) => {
    return (
        <h4 className="font-bold">
            {children}
        </h4>
    )
}

export default HeadingSmall
